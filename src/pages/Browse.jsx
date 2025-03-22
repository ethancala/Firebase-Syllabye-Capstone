import BrowsePdfs from "../components/BrowsePdfs";
import PdfUploader from "../components/PdfUploader";
import RequireProfessor from "../components/Requireprofessor";
import UserNameDisplay from "../components/UserNameDisplay";

const Browse = () => {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        
        
        <RequireProfessor>
      <PdfUploader />
    </RequireProfessor>
       
        
        
        <BrowsePdfs />
  
      </div>
    );
  };
  
  export default Browse;
  