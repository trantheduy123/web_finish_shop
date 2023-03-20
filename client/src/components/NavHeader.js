import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import logo from "../logo.svg";
import Button from "react-bootstrap/Button";
import DayNightToggle from "react-day-and-night-toggle";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBox from "../components/SearchBox";
import { LinkContainer } from "../../node_modules/react-router-bootstrap/";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Store } from "../Store";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import '../CSS/navheader.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaCartPlus} from 'react-icons/fa'

export default function NavHeader() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const context = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const signoutHandler = () => {
      ctxDispatch({ type: "USER_SIGNOUT" });
      localStorage.removeItem("userInfo");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");
      window.location.href = "./signin";
    };
  return (
    <Navbar
    bg='dark'
    variant='dark'
    className='Navbar  Navbar-overlay'
    expand='lg'
  >
    
     <div className='button-dark'>
        <DayNightToggle
          className='fui-button-shiny-2 '
          onClick={context.toggleTheme}
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
        />
      </div>
    
    <Container className='overlay'>
   
    <Col>
        <LinkContainer to='/'>
        <Navbar.Brand className='nav-band'>
            
          <div className='nav-men'>Men's</div>
        </Navbar.Brand>
      </LinkContainer>
      </Col>
        <Col xs={5}><SearchBox /></Col>
        
    <Col> 
         <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
       
        <Nav className='me-auto  w-100  justify-content-end'>
        
          <Link to='/cart' className='nav-link'>
          <FaCartPlus />
            {cart.cartItems.length > 0 && (
              <Badge pill bg='danger'>
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
                 <FaCartPlus />
              <LinkContainer to='/profile'>
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/orderhistory'>
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Link
                className='dropdown-item'
                to='#signout'
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className='nav-link' to='/signin'>
              Sign In
            </Link>
          )}
             {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
        </Nav>
        
      </Navbar.Collapse>
    </Col>
      

    <img src={logo} className='App-logo' alt='logo' />


    
    </Container>
  </Navbar>
  )
}
