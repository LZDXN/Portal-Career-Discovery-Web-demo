import React from "react";
import {
  MDBContainer,
  MDBTypography,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

const Register = () => {
  return (
    <MDBContainer>
      <MDBTypography tag="h4">Interested? Join our newsletter! </MDBTypography>
      <form>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form5Example2"
          label="Email address"
        />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form5Example3"
          label="I have read and agree to the terms"
          defaultChecked
        />

        <MDBBtn type="submit" block>
          Subscribe
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default Register;
