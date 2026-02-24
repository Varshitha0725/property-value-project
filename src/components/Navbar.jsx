import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Hide navbar on login & signup
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      {loggedUser && (
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end", // 👈 pushes logout to right
    alignItems: "center",
    padding: "10px 25px",
    background: "#ffffff",
    borderBottom: "1px solid #eee",
  },
  logoutButton: {
    padding: "6px 14px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default Navbar;


