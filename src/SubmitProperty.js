import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubmitProperty() {
  const navigate = useNavigate();

  const [propertyData, setPropertyData] = useState({
    location: "",
    propertyType: "",   // ✅ added
    budget: "",
    changes: ""
  });

  const handleChange = (e) => {
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  // Get existing properties
  const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];

  // Add new property
  storedProperties.push(propertyData);

  // Save back to localStorage
  localStorage.setItem("properties", JSON.stringify(storedProperties));

  alert("Property details submitted successfully!");

  navigate("/recommendations");
};


  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Submit Property Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={propertyData.location}
          onChange={handleChange}
        />
        <br /><br />

        {/* ✅ PROPERTY TYPE DROPDOWN */}
        <select
          name="propertyType"
          value={propertyData.propertyType}
          onChange={handleChange}
        >
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Independent House">Independent House</option>
          <option value="Villa">Villa</option>
        </select>
        <br /><br />

        <input
          type="number"
          name="budget"
          placeholder="Enter Budget"
          value={propertyData.budget}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="changes"
          placeholder="What do you want to change?"
          value={propertyData.changes}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default SubmitProperty;