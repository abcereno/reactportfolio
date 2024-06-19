import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import "./Home.css"
import me from "../../Assets/Images/me.png";
import ModalComponent from "../../Common/ModalComponent/ModalComponent";
import file from "../../Assets/Anthony Bernard Cereno.pdf";
import Spline from '@splinetool/react-spline';
import Spinner from 'react-bootstrap/Spinner';
const Home = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Function to be called when spline is loaded
  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row className="row-content text-light bg-dark full-bleed justify-content-center p-2">
      <Col xs={12} md={11}>
        <div style={{ "--delay": "0.1s" }} className='centered scale-in-center h-auto'>
          <img
            className='hero-img'
            width={171}
            height={180}
            alt="Web Developer"
            src={me}
          />
        </div>
        <h1 style={{ "--delay": "0.2s" }} className='scale-in-center centered'>Anthony Bernard Cereno</h1>
        <h3 style={{ "--delay": "0.3s" }} className='scale-in-center centered'>Fullstack Web Developer</h3>
        <div className="d-flex justify-content-center gap-3 w-100">
          <button style={{ "--delay": "0.4s" }} className='scale-in-center btn btn-primary d-inline-block' type="button">
            <a className='text-light text-unstyled' href={file} download>Download CV</a>
          </button>
          <Button style={{ "--delay": "0.5s" }} className='scale-in-center' variant="info" onClick={handleShow}>
            View Only CV
          </Button>
        </div>
        <div style={{ "--delay": "0.8s" }} className='scale-in-center'>
          {!splineLoaded && (
            <div className='flex-column justify-content-center align-items-center'>
              <h6>Loading...</h6>
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <Spline
            style={{ height: "330px" }}
            scene="https://prod.spline.design/7hQVzQV-tjbJ4NMR/scene.splinecode"
            loading="lazy"
            onLoad={handleSplineLoad} // Call handleSplineLoad when spline is loaded
          />
        </div>
        <ModalComponent show={show} handleClose={handleClose} />
      </Col>
    </Row>
  )
}

export default Home