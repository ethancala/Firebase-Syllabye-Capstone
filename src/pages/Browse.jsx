const Browse = () => {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>View PDF</h1>
  
        {/* Option 1: Standard public folder reference */}
        <iframe
          src="/pdfs/CPSC_34000_001 SP25 Syllabus Shamsuddin.pdf"
          width="80%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        ></iframe>
  
      </div>
    );
  };
  
  export default Browse;
  