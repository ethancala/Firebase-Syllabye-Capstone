    import { db } from '../Firebase';
    import { collection, getDocs, query, where, setDoc, doc, addDoc } from 'firebase/firestore';

    // Save syllabus progress to firestore database
    export const saveUnfinishedSyllabus = async (formData, userId) => {
        try {
            // Reference to the user's syllabi collection
            const syllabiCollection = collection(db, 'users', userId, 'unfinished_syllabi');
            
            // Check if a syllabus already exists with the same course name and section
            const q = query(
                syllabiCollection,
                where('formData.courseName', '==', formData.courseName),
                where('formData.courseSectionNumber', '==', formData.courseSectionNumber)
            );
            
            const querySnapshot = await getDocs(q);
            
            // If syllabus exists, update it; otherwise create a new one
            if (!querySnapshot.empty) {
                const existingDoc = querySnapshot.docs[0];  // Get the first matching document
                const docRef = existingDoc.ref;  // Get the document reference
                
                // Update the existing document
                await setDoc(docRef, {
                    formData,
                    timestamp: new Date(),
                });
                console.log('Syllabus updated.');
            } else {
                // If no existing syllabus, create a new document
                await addDoc(syllabiCollection, {
                    formData,
                    timestamp: new Date(),
                });
                console.log('Syllabus saved.');
            }
        } catch (error) {
            console.log('Error saving or updating syllabus', error);
        }
    };

    // Load unfinished syllabi
    export const loadUnfinishedSyllabi = async (userId) => {
        try {
            const syllabiCollection = collection(db, 'users', userId, 'unfinished_syllabi');
            const q = query(syllabiCollection, where('timestamp', '>', new Date(0)));
            const querySnapshot = await getDocs(q);
            const syllabi = [];
            querySnapshot.forEach((doc) => {
                syllabi.push({ id: doc.id, ...doc.data() });
            });
            return syllabi;
        } catch (error) {
            console.log('Error loading syllabi', error);
            return [];
        }
    };
