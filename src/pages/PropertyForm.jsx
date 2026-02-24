import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PropertyForm() {
  const navigate = useNavigate();
 const [form, setForm] = useState({
  location: "",
  propertyType: "",   // 👈 use propertyType instead of type
  budget: "",
  changes: "",
});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
  if (!form.location || !form.propertyType || !form.budget) {
    alert("Please fill all required fields");
    return;
  }

  // Get existing properties from localStorage
  const existingProperties =
    JSON.parse(localStorage.getItem("properties")) || [];

  // Add new property
  existingProperties.push(form);

  // Save back to localStorage
  localStorage.setItem(
    "properties",
    JSON.stringify(existingProperties)
  );

  alert("Property details submitted successfully!");

  navigate("/recommendations");
};
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Left side with image */}
      <div style={styles.leftSide}>
        <img 
          src="/images/imagehouse.jpeg"   // 👈 same photo for consistency
          alt="Home Interior" 
          style={styles.image}
        />
      </div>

      {/* Right side with form */}
      <div style={styles.rightSide}>
        <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>

        <div style={styles.card}>
          <h2 style={styles.title}>Submit Property Details</h2>

          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={form.location}
            onChange={handleChange}
            style={styles.input}
          />
<select
  name="propertyType"   // 👈 change from "type" to "propertyType"
  value={form.propertyType}
  onChange={handleChange}
  style={styles.input}
>
  <option value="">Select Property Type</option>
  <option value="Apartment">Apartment</option>
  <option value="Independent House">Independent House</option>
  <option value="Villa">Villa</option>
</select>


          <input
            type="text"
            name="budget"
            placeholder="Enter Budget"
            value={form.budget}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="changes"
            placeholder="What do you want to change? (Kitchen, bedroom, garden, etc)"
            value={form.changes}
            onChange={handleChange}
            style={{ ...styles.input, height: "80px" }}
          />

          <button style={styles.button} onClick={handleSubmit}>
            Submit
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#ffffff",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
 image: {
    width: "200%",
    maxWidth: "510px",
    height: "auto",
    borderRadius: "9px",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  siteTitle: {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "24px",
    textAlign: "center",
  },
  card: {
    width: "400px",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "15px",
  },
 
};

export default PropertyForm;
  