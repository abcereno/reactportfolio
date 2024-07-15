import React, { useState, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navibar.css";
import { Link } from "react-router-dom";
import ModalComponent from "../../Common/ModalComponent/ModalComponent";
import file from "../../Assets/Anthony Bernard Cereno.pdf";
import AutoNavigateContext from '../Contexts/Contexts';

const Navibar = () => {
  const [show, setShow] = useState(false);
  const { isAutoNavigate, toggleAutoNavigate } = useContext(AutoNavigateContext);

  const handleClose = () => setShow(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);



  const handleToggle = () => {
    setShow(prevShow => !prevShow);
  };


  return (
    <div className="navibar text-light ">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="p-2 position-fixed w-100 bg-dark"
      >
        <Container>
          <Navbar.Brand className="text-light">A..B..C..</Navbar.Brand>
          <Navbar.Toggle
            onClick={handleToggle}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse in={show} id="responsive-navbar-nav">
            <Nav>
              <Link
                onClick={handleClose}
                className="me-3 text-decoration-none text-light"
                to={"/"}
              >
                Home
              </Link>
              <Link
                onClick={handleClose}
                className="me-3 text-decoration-none text-light"
                to={"/about"}
              >
                Work
              </Link>
              <a
                className="me-3 text-decoration-none text-light"
                href={file}
                download
              >
                Download CV
              </a>
              <Link
                onClick={handleShowModal}
                className="me-3 text-decoration-none text-light"
              >
                View CV
              </Link>
              <Link className="me-3 text-decoration-none text-light bg-primary p-1" onClick={toggleAutoNavigate}>
                {isAutoNavigate
                  ? `Turn Off Advertisement`
                  : "Turn On Advertisement"}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ModalComponent show={showModal} handleClose={handleCloseModal} />
      </Navbar>
    </div>
  );
};

export default Navibar;
