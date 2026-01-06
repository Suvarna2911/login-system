import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    alert("Registered successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={register}>Register</button>

      <div className="link" onClick={() => navigate("/login")}>
        Already have an account? Login
      </div>
    </div>
  );
}

export default Register;
