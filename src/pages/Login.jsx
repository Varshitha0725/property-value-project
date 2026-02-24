import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    role: "user",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Auto-redirect if already logged in
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      if (loggedInUser.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Instead of checking localStorage users, just accept any input
    const fakeUser = {
      role: form.role,
      email: form.email || "demo@example.com",
      name: "Demo User",
    };

    localStorage.setItem("loggedInUser", JSON.stringify(fakeUser));

    if (fakeUser.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div style={styles.container}>
      {/* Left side with image */}
      <div style={styles.leftSide}>
        <img 
          src="/images/imagehouse.jpeg" 
          alt="Home Interior" 
          style={styles.image}
        />
      </div>

      {/* Right side with title + form */}
      <div style={styles.rightSide}>
        <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>

        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>

          <div style={styles.roleContainer}>
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleChange}
              />
              User
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={form.role === "admin"}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>

          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Don&apos;t have an account? <Link to="/signup" style={styles.link}>Signup</Link>
          </p>
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
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  roleContainer: {
    marginBottom: "15px",
    textAlign: "center",
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
    backgroundColor: "#000",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "15px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;



