import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navibar.css"
import { Link } from 'react-router-dom';
const Navibar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navibar text-light">
      <Navbar collapseOnSelect expand="lg" className="bg-dark p-2">
        <Container>
          <Navbar.Brand className="text-light">A..B..C..</Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse in={show} id="responsive-navbar-nav">
            <Nav>
              <Link onClick={handleClose} className='me-3 text-decoration-none text-light' to={"/"}>Home</Link>
              <Link onClick={handleClose} className='me-3 text-decoration-none text-light' to={"/about"}>About</Link>
              <Link onClick={handleClose} className='me-3 text-decoration-none text-light' to={"/affiliates"}>Affiliates</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar