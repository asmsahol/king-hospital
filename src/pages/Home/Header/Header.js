/** @format */

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='my-nav'>
      <Navbar
        bg='danger'
        variant='danger'
        className='shadow-sm p-3 bg-body rounded'
      >
        <Container>
          <div className='mobile-div'>
            <Navbar.Brand className='title' href='/home'>
              Kings Hospital
            </Navbar.Brand>
          </div>
          <div className='mobile-div'>
            <Nav variant='pills' defaultActiveKey='/home'>
              <Nav.Item>
                <Link className='text-warning nav-link menu' to='/home'>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='text-warning nav-link menu' to='/services'>
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='text-warning nav-link menu' to='/about'>
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='text-warning nav-link menu' to='/signup'>
                  {!user?.email && "Sign Up"}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='text-warning nav-link menu' to='/login'>
                  {!user?.email && "Log In"}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className='text-warning nav-link menu place-order'
                  to='/order'
                >
                  Place Order
                </Link>
              </Nav.Item>
              {user?.email && (
                <button className='logout' onClick={logOut}>
                  Log Out
                </button>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
