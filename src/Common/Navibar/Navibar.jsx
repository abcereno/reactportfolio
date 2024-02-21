import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navibar.css"
import { Link } from 'react-router-dom';
const Navibar = () => {
  return (
    <div className="navibar text-light">
      <Navbar collapseOnSelect expand="lg" className="bg-dark p-2">
        <Container>
          <Navbar.Brand className="text-light">A..B..C..</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className='me-3 text-decoration-none text-light' to={"/"}>Home</Link>
              <Link className='me-3 text-decoration-none text-light' to={"/about"}>About</Link>
              <Link className='me-3 text-decoration-none text-light' to={"/affiliates"}>Affiliates</Link>
              {/* <Nav.Link className="text-light" to={"/"}>Home</Nav.Link>
              <Nav.Link className="text-light" to={"/about"}>About</Nav.Link>
              <Nav.Link className="text-light" to={"/affiliates"}>Affiliates</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar