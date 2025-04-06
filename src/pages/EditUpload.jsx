import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDownloadURL, deleteObject, ref } from "firebase/storage";
import { storage } from "../Firebase";
import { getAuth } from "firebase/auth";
import { uploadBytes, getBlob } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
function EditUpload() {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileName, file } = location.state || {};

  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

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
    console.log("[Upload] Getting blob from Firebase Storage...");
    const blob = await getBlob(privateFileRef);
    console.log("[Upload] Blob retrieved. Uploading to:", publicFileRef.fullPath);

    await uploadBytes(publicFileRef, blob);
    alert("File uploaded publicly!");
  } catch (error) {
    console.error("Error uploading file publicly:", error);
    alert("Upload failed: " + error.message);
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
            </>
          ) : (
            <p>Loading preview...</p>
          )}
        </>
      ) : (
        <p>No file name provided.</p>
      )}
    </div>
  );
}

export default EditUpload;
