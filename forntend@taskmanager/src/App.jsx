
import './App.css'
import Navbar from './assets/components/Navbar'
import Login from './assets/pages/Login'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null)
  return  (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />  
        {/* <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} /> */}
      </Routes>
    </Router>
  );
}

export default App
