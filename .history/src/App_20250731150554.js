
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoCall from "./VideoCall";
import "./App.css";


function Home() {
  return (
    <div className="landing-container">
      <h1 className="heading">Welcome to CallNexus)-Video Consultation App</h1>
      <Link to="/video-call">
        <button className="start-button">Start Video Consultation</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-call" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
