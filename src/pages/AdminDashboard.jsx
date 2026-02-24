// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedUser || loggedUser.role !== "admin") {
      navigate("/admin-login");
    }

    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(stored);
  }, [navigate]);

  const handleDelete = (index) => {
    const updated = properties.filter((_, i) => i !== index);
    setProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
  };

  const handleAddRecommendation = (index) => {
    const recommendation = prompt("Enter recommendation for this property:");
    if (recommendation) {
      const updated = [...properties];
      if (!updated[index].recommendations) {
        updated[index].recommendations = [];
      }
      updated[index].recommendations.push(recommendation);
      setProperties(updated);
      localStorage.setItem("properties", JSON.stringify(updated));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>
      <h2 style={styles.subtitle}>Admin Dashboard</h2>

      {properties.length === 0 ? (
        <p>No properties submitted.</p>
      ) : (
        properties.map((property, index) => (
          <div key={index} style={styles.card}>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Type:</strong> {property.propertyType}</p>
            <p><strong>Budget:</strong> ₹{property.budget}</p>
            <p><strong>Description:</strong> {property.description}</p>

            {property.image && (
              <img src={property.image} alt="property" style={styles.image} />
            )}

            {property.recommendations && property.recommendations.length > 0 && (
              <div style={styles.recommendations}>
                <strong>Recommendations:</strong>
                <ul>
                  {property.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={styles.actions}>
              <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                Delete Property
              </button>
              <button onClick={() => handleAddRecommendation(index)} style={styles.addButton}>
                Add Recommendation
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  siteTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "150px",
    marginTop: "10px",
    borderRadius: "6px",
  },
  recommendations: {
    marginTop: "10px",
  },
  actions: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },
  deleteButton: {
    padding: "8px 12px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AdminDashboard;
