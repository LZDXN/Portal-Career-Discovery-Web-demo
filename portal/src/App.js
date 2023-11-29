import React from "react";
import Navbar from "./components/Navbar";
import VideoDisplay from "./components/VideoDisplay";
import Register from "./components/Register";
import Description from "./components/Description";
import Footer from "./components/Footer";

import "./App.css";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

function App() {
  return (
    // <MDBContainer fluid>
    <div className="App">
      <MDBRow className="mb-4">
        <Navbar />
      </MDBRow>
      <main>
        <MDBCol className="mb-6">
          <VideoDisplay />
        </MDBCol>
        <MDBCol className="mb-6">
          <Description />
          <Register />
        </MDBCol>
      </main>
      <Footer />
    </div>
    // </MDBContainer>
  );
}

export default App;
