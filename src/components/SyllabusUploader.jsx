import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import { getFirestore, collection, query, where, getDocs, deleteDoc, addDoc, updateDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";
import SyllabusPDF from './SyllabusPDF';
import './SyllabusForm.css';


const SyllabusUploader = ({ formData }) => {
    const [uploading, setUploading] = useState(false);
    const [downloadURL, setDownloadURL] = useState(null);

    const handleUpload = async () => {
        setUploading(true);
        try {
            const pdfBlob = await pdf(<SyllabusPDF formData={formData} />).toBlob();

            const storage = getStorage();
            const dbFirestore = getFirestore();
            const db = getDatabase();
            const auth = getAuth();
            const user = auth.currentUser;
            const userId = user?.uid || 'anonymous';

            const shortYear = formData.courseYear.slice(-2);
            const termMap = { 'Spring': 'Sp', 'Fall': 'Fa', 'Summer': 'Su' };
            const termAbbrev = termMap[formData.courseTerm] || formData.courseTerm;
            const fileName = `${shortYear}-${termAbbrev}-${formData.courseSectionNumber}.pdf`;

            const fileRef = storageRef(storage, `uploads/${userId}/${fileName}`);
            await uploadBytes(fileRef, pdfBlob);
            const url = await getDownloadURL(fileRef);
            setDownloadURL(url);

            // Create Firestore doc
            const docRef = await addDoc(collection(dbFirestore, "syllabusFields"), {
                ...formData,
                fileName,
                syllabusURL: url,
                updatedAt: Timestamp.now(),
                uploadedAt: Timestamp.now(),
                professorId: userId,
                syllabusID: ""
            });

            await updateDoc(docRef, { syllabusID: docRef.id });

            // Store in Realtime DB 
            await set(dbRef(db, `pdfs/syllabus-${formData.courseSectionNumber}`), { syllabusURL: url });

            // Delete unfinished draft (from Firestore)
            const unfinishedRef = collection(dbFirestore, 'users', userId, 'unfinished_syllabi');
            const q = query(
                unfinishedRef,
                where('formData.courseName', '==', formData.courseName),
                where('formData.courseSectionNumber', '==', formData.courseSectionNumber)
            );
            const snapshot = await getDocs(q);
            snapshot.forEach(async (docSnap) => {
                await deleteDoc(docSnap.ref);
                console.log(`Deleted unfinished syllabus: ${docSnap.id}`);
            });

            alert("PDF successfully uploaded and unfinished draft removed!");

        } catch (error) {
            console.error("Upload failed:", error);
            alert("Error uploading PDF. Please try again.");
        }
        setUploading(false);
    };

    return (
        <div>
            <Button onClick={handleUpload} disabled={uploading} className="open-modal-button mt-2 mb-2">
                {uploading ? "Uploading..." : "Save Syllabus"}
            </Button>

            {downloadURL && (
                <p>
                    Saved! You can view and edit your syllabus on the dashboard page.{' '}
                    <a href={downloadURL} target="_blank" rel="noopener noreferrer">View PDF</a>
                </p>
            )}
        </div>
    );
};

export default SyllabusUploader;
