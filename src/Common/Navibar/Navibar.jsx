import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navibar.css";
import { Link } from "react-router-dom";
import ModalComponent from "../../Common/ModalComponent/ModalComponent";
import { useEcommerceContext } from "../EcommerceContext/EcommerceContext";

const Navibar = () => {
  const { cart } = useEcommerceContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="navibar text-light">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="p-2 position-fixed bg-dark w-100"
      >
        <Container>
          <Navbar.Toggle
            onClick={handleToggle}
            aria-controls="responsive-navbar-nav"
          />
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
                target="_blank"
                to={"https://calendly.com/cereno-abc/30min"}
              >
                Let's Talk
              </Link>
          <Navbar.Collapse in={show} id="responsive-navbar-nav">
            <Nav>
              <Link
                onClick={handleShowModal}
                className="me-3 text-decoration-none text-light"
              >
                Resume
              </Link>
            </Nav>
            <Nav>
            <Link
                onClick={handleClose}
                className="me-3 text-decoration-none text-light"
                to={"/about"}
              >
                About
              </Link>
            </Nav>
            <Nav>
              <Link onClick={handleClose}
                to="/cart" className="btn btn-primary position-relative">
                Cart <span className="badge text-bg-secondary">{cart.length}</span>
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
