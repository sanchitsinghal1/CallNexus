import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoCall from "./VideoCall";

function Home() {
  return (
    <div>
      <h1>Welcome to Video Consultation</h1>
      <Link to="/video-call">
        <button></button>
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
