import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import VideoDisplay from "./components/VideoDisplay";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <VideoDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default App;
