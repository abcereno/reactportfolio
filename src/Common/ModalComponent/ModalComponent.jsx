import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import resume from "../../Assets/Images/Anthony Bernard Cereno.png";

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Anthony Bernard Cereno CV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className='img-fluid' src={resume} alt="Anthony Bernard Cereno" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
