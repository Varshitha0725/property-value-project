
import { useNavigate } from "react-router-dom";
function UserDashboard() {
   const navigate = useNavigate();
  const userName = localStorage.getItem("userName");


  return (
    <div style={styles.container}>
      {/* Left side with image */}
      <div style={styles.leftSide}>
        <img 
          src="/images/imagehouse.jpeg"   // 👈 same photo as login/signup
          alt="Home Interior" 
          style={styles.image}
        />
      </div>

      {/* Right side with content */}
      <div style={styles.rightSide}>
        <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>

        <div style={styles.card}>
          <h2>Welcome, {userName}</h2>
          <p>Enhance your property value.</p>

          <div style={{ marginTop: "30px" }}>
            <button
              onClick={() => navigate("/submit-property")}
              style={styles.button}
            >
              Submit Property Details
            </button>
          </div>
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
    width: "400%",
    maxWidth: "490px",
    height: "auto",
    borderRadius: "8px",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
 siteTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "24px",
    textAlign: "center",
  },
  card: {
    width: "350px",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
    fontWeight: "500",
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default UserDashboard;

