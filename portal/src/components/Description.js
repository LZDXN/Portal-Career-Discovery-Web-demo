import React from "react";
import "../App.css";
import { MDBTypography, MDBContainer } from "mdb-react-ui-kit";

const Description = () => {
  return (
    <MDBContainer>
      <MDBTypography tag="h1">
        Portal - Discover your Future Career
      </MDBTypography>
      <MDBTypography>
        Portal allows students to discover their future career by seeing and
        hearing limitless perspectives in their jobs of interest through 30-90
        second, algorithmically subsidized videos created by professionals. It
        also centralizes data for every career in its database, and it offers
        paid 1-on-1 consultations with creators to help users learn more about a
        particular field or make connections within it.
      </MDBTypography>
    </MDBContainer>
  );
};

export default Description;
