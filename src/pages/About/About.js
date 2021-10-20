/** @format */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className='text-start m-5'>
          <p>
            Mayo Clinic generally doesn't require a doctor's referral. But your
            insurance might. It's a good idea to check with your insurance
            company about coverage requirements. If you need a referral, we can
            help you with this process. Even if a doctor's referral isn't
            required, getting one can help Mayo Clinic better determine what
            care you need.
          </p>
          <p>
            Appointment specialists are specially trained to match you with the
            provider or group that's the best fit for your diagnosis and medical
            history. But you may wonder if you can request a specialist that
            you've read about or who's been recommended by a friend or
            colleague.
          </p>
          <p>
            We won't grant requests for care team members based on race,
            religion, ethnicity, sex, sexual orientation, gender identity,
            language, disability status, age or any other personal attribute.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
