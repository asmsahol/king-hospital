/** @format */

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg='white'
        variant='info'
        className='shadow-sm p-3 mb-5 bg-body rounded'
      >
        <Container>
          <Navbar.Brand className='title' href='/home'>
            Kings Hospital
          </Navbar.Brand>
          <Nav variant='pills' defaultActiveKey='/home'>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/home'>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/services'>
                Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/about'>
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/signup'>
                {!user?.email && "Sign Up"}
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/login'>
                {!user?.email && "Log In"}
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='text-info nav-link menu' to='/order'>
                Place Order
              </Link>
            </Nav.Item>
            {user?.email && <button onClick={logOut}>Log Out</button>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
