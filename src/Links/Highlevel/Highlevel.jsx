import { Col, Container, Row } from "react-bootstrap";
import "./Highlevel.css";
import datum from "../../Assets/data";
import { Link } from "react-router-dom";
const Highlevel = () => {
  return (
    <Container>
      <Row className="row-content row-scrollspy g-0 scrollspy-sticky">
        <h2 className="centered job py-5">HighLevel Funnels</h2>
        <Col className="grid-highlevel">
          {datum.map((data) => (
            <div key={data.id} class="card mb-3">
              <img
                loading="lazy"
                src={data.path}
                className="rounded-start img-fluid card-img-top"
                alt={data.objective}
              />
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.note}</p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    <Link target="_blank" to={data.link}>
                      Visit Now
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Highlevel;
