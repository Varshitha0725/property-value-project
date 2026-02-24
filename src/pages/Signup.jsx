import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    role: "user",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Left side with image */}
      <div style={styles.leftSide}>
        <img 
          src="/images/imagehouse.jpeg"   // 👈 use same photo as login
          alt="Property" 
          style={styles.image}
        />
      </div>

      {/* Right side with title + form */}
      <div style={styles.rightSide}>
        {/* Title ABOVE the signup card */}
        <h1 style={styles.siteTitle}>DreamSpace: Enhancing Homes</h1>

        <div style={styles.card}>
          <h2 style={styles.title}>Signup</h2>

          {/* Role Selection */}
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
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

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

          <button onClick={handleSignup} style={styles.button}>
            Signup
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
    width: "400%",
    maxWidth: "490px",
    height: "auto",
    borderRadius: "8px",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",   // stack title + card vertically
    justifyContent: "center",
    alignItems: "center",
  },
  siteTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "24px",   // spacing above card
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

export default Signup;
