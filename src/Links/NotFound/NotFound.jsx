import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row className="ç">
    <Col className="animate">
    <p className='text-danger'>ERROR 404 Not Found</p>
    <p>Sorry, I don't have that page</p>
    <Link className='btn btn-primary' to={"/"}>Home</Link>
    </Col>
  </Row>
  )
}

export default NotFound