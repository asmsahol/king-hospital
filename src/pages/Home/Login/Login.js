/** @format */

import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Login.css";
import { Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <Container className='w-50%'>
      <Form>
        <Form.Group as={Row} className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Button className='log_in'>Log in</Button>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Button className='log_in_google' onClick={signInWithGoogle}>
            Log in With Google
          </Button>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Link to='/signup'>New User?</Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
