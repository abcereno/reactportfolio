import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Inaanak = () => {
  return (
    <Container>
        <Row>
        <Col className="box entering">
          <div>
            <p className="text-small">02</p>
            <h3>Anya</h3>
            <p>
              I develop modern, responsive websites and applications tailored to
              your business needs, using cutting-edge technology for optimal
              performance.
            </p>
          </div>
          <Link className="butones" to={"/fullstack"}>Take Quiz</Link>
        </Col>
        <Col className="box entering">
          <div>
            <p className="text-small">02</p>
            <h3>Sebastian</h3>
            <p>
              I develop modern, responsive websites and applications tailored to
              your business needs, using cutting-edge technology for optimal
              performance.
            </p>
          </div>
          <Link className="butones" to={"/fullstack"}>Take Quiz</Link>
        </Col>
        <Col className="box entering">
          <div>
            <p className="text-small">02</p>
            <h3>Amaya</h3>
            <p>
              I develop modern, responsive websites and applications tailored to
              your business needs, using cutting-edge technology for optimal
              performance.
            </p>
          </div>
          <Link className="butones" to={"/fullstack"}>Take Quiz</Link>
        </Col>
        </Row>
    </Container>
)
}

export default Inaanak