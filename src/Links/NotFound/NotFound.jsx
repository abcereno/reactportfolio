import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row className="row-content g-0">
    <Col className="centered flex-column">
    <p className='text-danger'>ERROR 404 Not Found</p>
    <p>Coming Soon!</p>
    <Link className='btn btn-primary' to={"/"}>Home</Link>
    </Col>
  </Row>
  )
}

export default NotFound