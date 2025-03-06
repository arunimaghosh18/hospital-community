import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ setUser }) {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, role };

    if (username && password) {
      setUser(user);
      alert("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Redirecting to password recovery...");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'linear-gradient(to right, #4a90e2, #9013fe)' }}>
      <div className="card" style={{ backdropFilter: 'blur(10px)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <h2 className="text-center" style={{ color: '#fff' }}>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#000', borderColor: 'rgba(255, 255, 255, 0.5)' }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#000', borderColor: 'rgba(255, 255, 255, 0.5)' }}
            />
          </div>
          <div className="form-group">
            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <div className="d-flex justify-content-between mt-2">
            <label>
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> Remember me
            </label>
            <a href="#" style={{ color: '#61dafb' }} onClick={handleForgotPassword}>Forgot password?</a>
          </div>
          <p className="mt-3" style={{ color: '#fff' }}>
            Don't have an account? <a href="#" style={{ color: '#61dafb' }}>Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
