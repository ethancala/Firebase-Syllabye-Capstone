import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDownloadURL, deleteObject, ref, uploadBytes, getBlob } from "firebase/storage";
import { storage } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; 
import EditSyllabusForm from "../components/EditSyllabusForm"; 

function EditUpload() {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileName, file } = location.state || {};

  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
  const [syllabusData, setSyllabusData] = useState(null); // ✅ ADDED
  const [showModal, setShowModal] = useState(false);       // ✅ ADDED

  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user?.uid;

  useEffect(() => {
    const fetchPdfUrl = async () => {
      if (userId && fileName) {
        const pdfRef = ref(storage, `uploads/${userId}/${fileName}`);
        try {
          const url = await getDownloadURL(pdfRef);
          setPdfPreviewUrl(url);
        } catch (error) {
          console.error("Error fetching PDF preview:", error);
        }
      }
    };

    fetchPdfUrl();
  }, [userId, fileName]);

  const handleDelete = async () => {
    if (!userId || !fileName) return;

    const fileRef = ref(storage, `uploads/${userId}/${fileName}`);

    try {
      await deleteObject(fileRef);
      alert("File deleted successfully.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Failed to delete file.");
    }
  };

  const handlePublicUpload = async () => {
    const auth = getAuth();
    const waitForAuth = () =>
      new Promise((resolve) =>
        onAuthStateChanged(auth, (user) => resolve(user))
      );

    const user = await waitForAuth();
    const userId = user?.uid;

    if (!userId || !fileName) {
      alert("User not authenticated or file missing.");
      return;
    }

    const privateFileRef = ref(storage, `uploads/${userId}/${fileName}`);
    const publicFileRef = ref(storage, `pdfs/${fileName}`);

    try {
      const blob = await getBlob(privateFileRef);
      await uploadBytes(publicFileRef, blob);
      alert("File uploaded publicly!");
    } catch (error) {
      console.error("Error uploading file publicly:", error);
      alert("Upload failed: " + error.message);
    }
  };

  const handleEdit = async () => {
    if (!userId || !fileName) {
      alert("User not authenticated or file name missing.");
      return;
    }

    try {
      console.log("Searching Firestore for fileName:", fileName);

      const q = query(
        collection(db, "syllabusFields"),
        where("fileName", "==", fileName)
      );
      const snapshot = await getDocs(q);

      console.log("Query result size:", snapshot.size);

      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        setSyllabusData(docData); // ✅ SET FORM DATA
        setShowModal(true);       // ✅ OPEN MODAL
      } else {
        alert("No syllabus metadata found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching syllabus metadata:", error);
      alert("Failed to load syllabus details.");
    }
  };

  return (
    
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>Edit Upload</h1>
      {fileName ? (
        <>
          <p>
            You are editing: <strong>{fileName}</strong>
          </p>
          {pdfPreviewUrl ? (
            <>
              <iframe
                src={pdfPreviewUrl}
                width="80%"
                height="500px"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
                title="PDF Preview"
              ></iframe>

              <button
                onClick={handleDelete}
                style={{
                  marginTop: "1.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Delete File
              </button>

              <button
                onClick={handlePublicUpload}
                style={{
                  marginTop: "1.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#13941c",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Upload Publicly
              </button>

              <button
                onClick={handleEdit}
                style={{
                  marginTop: "1.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#910000",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Edit
              </button>
            </>
          ) : (
            <p>Loading preview...</p>
          )}
        </>
      ) : (
        <p>No file name provided.</p>
      )}
      {showModal && syllabusData && (
      <EditSyllabusForm
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        initialData={syllabusData}
      />
    )}

    </div>
  );
}

export default EditUpload;
