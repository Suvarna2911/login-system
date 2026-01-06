import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.message === "Login success") {
      navigate("/dashboard");
    } else {
      alert("User not found. Please register.");
      navigate("/register");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={login}>Login</button>

      <div className="link" onClick={() => navigate("/register")}>
        New user? Register
      </div>
    </div>
  );
}

export default Login;
