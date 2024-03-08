import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import "./Home.css"
import Projects from '../../Common/Projects/Projects'
import Karosel from '../../Common/Karosel/Karosel'
import me from "../../Images/me.png";
import ModalComponent from "../../Common/ModalComponent/ModalComponent";
import file from "./Anthony.pdf";
import Spline from '@splinetool/react-spline';
const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row style={{ minHeight: "calc(100vh - 96px)" }} className="text-light bg-dark full-bleed justify-content-center p-2">
        <Row>
          <Col xs={12} md={6}>
            <Row className='d-flex justify-content-center'>
              <Col xs={12} md={6}>
                <div className='hero slide-in-bck-bottom'>
                  <img
                    className='hero-img'
                    width={171}
                    height={180}
                    alt="Web Developer"
                    src={me}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Spline style={{ height: "315px" }} scene="https://prod.spline.design/7hQVzQV-tjbJ4NMR/scene.splinecode" loading="lazy"/>
              </Col>
            </Row>
          <Row className='d-flex flex-column'>
            <h1 className='flicker-2 tracking-in-expand'>Anthony Bernard Cereno</h1>
            <h6 className='tracking-in-expand slide-in-bck-bottom'>Fullstack Web Developer</h6>
            <div class="d-flex justify-content-evenly w-100">
              <button type="button" class="btn btn-primary d-inline-block slide-in-bck-bottom">
                <a className='text-light text-unstyled' href={file} download>Download CV</a>
              </button>
              <Button className='slide-in-bck-bottom' variant="info" onClick={handleShow}>
                View Only CV
              </Button>
            </div>
          </Row>
          </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
          <Karosel />
        </Col>
        </Row>
        <Row className='p-0'>
          <Projects />
        </Row>
      </Row>
      <ModalComponent show={show} handleClose={handleClose} />

    </>
  )
}

export default Home