import React from "react";
import { Modal, Button } from "react-bootstrap";
import resume from "../../Assets/Images/Anthony Bernard Cereno.webp";
import file from "../../Assets/Anthony Bernard Cereno.pdf";

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid resume" src={resume} alt="Anthony Bernard Cereno" />
      </Modal.Body>
      <Modal.Footer>
        <a
          className="me-3 text-decoration-none text-light btn btn-primary"
          href={file}
          download
        >
          Download
        </a>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
