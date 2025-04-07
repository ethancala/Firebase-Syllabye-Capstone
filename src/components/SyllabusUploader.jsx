import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";
import SyllabusPDF from './SyllabusPDF';
import { Button } from "react-bootstrap";
import './SyllabusForm.css';

const SyllabusUploader = ({ formData }) => {
    const [uploading, setUploading] = useState(false);
    const [downloadURL, setDownloadURL] = useState(null);

    const handleUpload = async () => {
        setUploading(true);
        try {
            // Generate the PDF as a blob
            const pdfBlob = await pdf(<SyllabusPDF formData={formData} />).toBlob();

            // Firebase Storage setup
            const storage = getStorage();
            

            // Convert full year to last two digits
            const shortYear = formData.courseYear.slice(-2);

           
            const termMap = {
                'Spring': 'Sp',
                'Fall': 'Fa',
                'Summer': 'Su'
            };
            const termAbbrev = termMap[formData.courseTerm] || formData.courseTerm;

            // Build the filename
            const fileName = `${shortYear}-${termAbbrev}-${(formData.courseSectionNumber)}.pdf`;

            //upload to firebase
            const fileRef = ref(storage, `pdfs/${fileName}`);



            // Upload PDF to Firebase Storage
            await uploadBytes(fileRef, pdfBlob);

            // Get download URL
            const url = await getDownloadURL(fileRef);
            setDownloadURL(url);

            // Store the URL in Firebase Database
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
