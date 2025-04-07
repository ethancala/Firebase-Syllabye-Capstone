import React, { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase"; // Import Firebase configuration
import "./BrowsePdfs.css";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function MyUploads() {

    const [userUploads, setuserUploads] = useState([]); // Store PDFs
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user?.uid;
    const navigate = useNavigate();


    useEffect(() => {
      const fetchPdfs = async () => {
        const storageRef = ref(storage, `uploads/${userId}/`); // User specfic folder
  
        try {
          const result = await listAll(storageRef);
          const files = await Promise.all(
            result.items.map(async (fileRef) => {
              const url = await getDownloadURL(fileRef);
              return { name: fileRef.name, url };
            })
          );
  
          setuserUploads(files);
        } catch (error) {
          console.error("Error fetching Uploads:", error);
        }
      };
  
      fetchPdfs();
    }, []);




    return (
        <div className="pdf-container">
          <h2 className="title">Your uploads:</h2>
          <br /><br />
          <div className="pdf-list">
            {userUploads.length > 0 ? (
              userUploads.map((pdf, index) => (
                <div
                  key={index}
                  className="pdf-item"
                  onClick={() => navigate("/EditUpload", { state: { fileName: pdf.name } })}

                  style={{ cursor: "pointer" }}
                >
                  <div className="pdf-block">
                    <img
                      src="/images/Syllabye-White-White.png"
                      alt="PDF Preview"
                      className="pdf-preview"
                    />
                    <p className="pdf-title">{pdf.name}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No files found, use the upload button above to get started.</p>
            )}
          </div>
        </div>
      );
      
}

export default MyUploads;
