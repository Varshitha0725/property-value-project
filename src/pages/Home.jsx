import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  return (
    <div style={styles.container}>
      <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>
      <h2>Increase Your Property Value Smartly</h2>

      <p>
        Get personalized home improvement ideas for Indian middle-class homes.
      </p>

      {userName && (
        <button
          style={styles.button}
          onClick={() => navigate("/submit-property")}
        >
          Submit Property Details
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  siteTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;