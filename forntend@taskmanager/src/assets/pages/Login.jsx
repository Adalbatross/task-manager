import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Login.css"

function Login({setUser}) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();
  
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(username.trim()=="" || password.trim() == ""){
      setError("The username and the password fields are required!")
      return;
    }

    const userData  = {
      name: username,
      profileImage: "ff7rebirth_ Screenshot 2025.02.16 - 16.52.36.92.png"
    };
    setUser(userData);
    navigate("/dashboard")
  }

  return (
    <div className="page-container">
    <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
      <form className='login-form' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
          className='login-input'
          />
        <input 
          type="password" 
          placeholder="Enter password" 
          className='login-input'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type= "submit" className="login-btn" >Login</button>

      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
    </div>
  );
};


export default Login
