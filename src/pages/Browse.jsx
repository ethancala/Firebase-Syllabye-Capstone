import React from "react";

const Browse = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Browse Page</h1>
      <p>Explore available items, categories, or content.</p>

      {/* Placeholder for browsing items */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", width: "150px" }}>
            <h3>Item {item}</h3>
            <p>Short description</p>
            <button style={{ padding: "5px 10px", cursor: "pointer" }}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
