import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import { getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import SyllabusPDF from './SyllabusPDF';
import { Button } from "react-bootstrap";
import './SyllabusForm.css';


const SyllabusUploader = ({ formData, userId }) => {
    const [uploading, setUploading] = useState(false);
    const [downloadURL, setDownloadURL] = useState(null);

    const handleUpload = async () => {
        setUploading(true);
        try {
            // Generate the PDF
            const pdfBlob = await pdf(<SyllabusPDF formData={formData} />).toBlob();

            // Upload to Firebase Storage
            const storage = getStorage();
            const shortYear = formData.courseYear.slice(-2);
            const termMap = { 'Spring': 'Sp', 'Fall': 'Fa', 'Summer': 'Su' };
            const termAbbrev = termMap[formData.courseTerm] || formData.courseTerm;
            const fileName = `${shortYear}-${termAbbrev}-${(formData.courseSectionNumber)}.pdf`;
            const fileRef = storageRef(storage, `pdfs/${fileName}`);
            await uploadBytes(fileRef, pdfBlob);

            // Get download URL
            const url = await getDownloadURL(fileRef);
            setDownloadURL(url);

            // Save URL to Firebase Realtime Database
            const rtdb = getDatabase();
            await set(dbRef(rtdb, `pdfs/syllabus-${formData.courseSectionNumber}`), { syllabusURL: url });

            // Delete unfinished syllabus from Firestore
            const firestore = getFirestore();
            const syllabiCollection = collection(firestore, 'users', userId, 'unfinished_syllabi');
            const q = query(
                syllabiCollection,
                where('formData.courseName', '==', formData.courseName),
                where('formData.courseSectionNumber', '==', formData.courseSectionNumber)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (docSnapshot) => {
                await deleteDoc(docSnapshot.ref);
                console.log(`Deleted unfinished syllabus: ${docSnapshot.id}`);
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
                {uploading ? "Uploading..." : "Upload Syllabus"}
            </Button>

            {downloadURL && (
                <p>
                    Uploaded! <a href={downloadURL} target="_blank" rel="noopener noreferrer">View PDF</a>
                </p>
            )}
        </div>
    );
};

export default SyllabusUploader;
