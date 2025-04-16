import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import SyllabusPDF from './SyllabusPDF';
import { Button } from "react-bootstrap";
import { getFirestore, collection, addDoc, updateDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import './SyllabusForm.css';
import { Buffer } from "buffer";
window.Buffer = Buffer;

const SyllabusUploader = ({ formData }) => {
    const [uploading, setUploading] = useState(false);
    const [downloadURL, setDownloadURL] = useState(null);

    const handleUpload = async () => {
        setUploading(true);
        try {
            const pdfBlob = await pdf(<SyllabusPDF formData={formData} />).toBlob();

            const storage = getStorage();
            const dbFirestore = getFirestore();
            const auth = getAuth();
            const user = auth.currentUser;
            const userId = user?.uid || 'anonymous';

            const shortYear = formData.courseYear.slice(-2);
            const termMap = { 'Spring': 'Sp', 'Fall': 'Fa', 'Summer': 'Su' };
            const termAbbrev = termMap[formData.courseTerm] || formData.courseTerm;
            const fileName = `${shortYear}-${termAbbrev}-${formData.courseSectionNumber}.pdf`;

            const fileRef = ref(storage, `uploads/${userId}/${fileName}`);
            await uploadBytes(fileRef, pdfBlob);
            const url = await getDownloadURL(fileRef);
            setDownloadURL(url);

            // Create Firestore doc first to get the ID
            const docRef = await addDoc(collection(dbFirestore, "syllabusFields"), {
                courseDates: formData.courseDates,
                courseDescription: formData.courseDescription,
                courseName: formData.courseName,
                courseNumber: formData.courseNumber,
                coursePolicy: formData.coursePolicy,
                courseSection: formData.courseSection,
                courseTerm: formData.courseTerm,
                courseTimes: formData.courseTimes,
                courseYear: formData.courseYear,
                creditHours: formData.creditHours,
                fileName: fileName,
                finalDate: formData.finalDate,
                gradingPolicy: formData.gradingPolicy,
                instructorEmail: formData.instructorEmail,
                instructorName: formData.instructorName,
                instructorPhone: formData.instructorPhone,
                meetingLocation: formData.meetingLocation,
                officeHours: formData.officeHours,
                officeLocation: formData.officeLocation,
                otherMaterials: formData.otherMaterials,
                prerequisites: formData.prerequisites,
                scheduleChanges: formData.scheduleChanges,
                scheduleDesc: formData.scheduleDesc,
                softwareHardware: formData.softwareHardware,
                suppleMats: formData.suppleMats,
                syllabusURL: url,
                textbooks: formData.textbooks,
                updatedAt: Timestamp.now(),
                uploadedAt: Timestamp.now(),
                zoomLink: formData.zoomLink,
                professorId: userId,
                syllabusID: "" // placeholder
            });

            // Update the same doc with its own ID
            await updateDoc(docRef, {
                syllabusID: docRef.id
            });

            // Store the URL in Firebase Realtime Database (optional)
            const db = getDatabase();
            await set(dbRef(db, `pdfs/syllabus-${formData.courseSectionNumber}`), { syllabusURL: url });

            alert("PDF successfully uploaded!");

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
                    Saved! You can view and edit your syllabus on the dashboard page.<a href={downloadURL} target="_blank" rel="noopener noreferrer">View PDF</a>
                </p>
            )}
        </div>
    );
};

export default SyllabusUploader;
