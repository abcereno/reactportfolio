import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { id } from "../../Assets/Images/images";
const Home = () => {

  return (
    <Container>
      <Row className="row-content home">
        <Col xs={12} className="centered flex-column gap-3">
              <img id="profile" loading="lazy" className="img-fluid filter" src={id} alt="Anthony Bernard Cereno" />
              <h2 className="job">
                <span className="centered">Fullstack Web</span><span className="centered">Developer</span>
              </h2>
              <p>
                I am passionate about helping businesses thrive in the digital
                age
              </p>
              <h6 className="centered text-light animate">Services ↓</h6>
        </Col>
      </Row>
      <Row className="gap-5 g-0 py-5">
        <Col className="box entering">
          <div>
            <p className="text-small">01</p>
            <h3>HighLevel</h3>
            <p>
              I provide expert GoHighLevel integration to automate marketing,
              boost lead generation, and simplify client management for your
              business.
            </p>
          </div>
          <Link className="butones" to={"/highlevel"}>About HighLevel</Link>
        </Col>
        <Col className="box entering">
          <div>
            <p className="text-small">02</p>
            <h3>WEB-DEV</h3>
            <p>
              I develop modern, responsive websites and applications tailored to
              your business needs, using cutting-edge technology for optimal
              performance.
            </p>
          </div>
          <Link className="butones" to={"/fullstack"}>About Development</Link>
        </Col>
        <Col className="box entering">
          <div>
            <p className="text-small">03</p>
            <h3>E-commerce</h3>
            <p>
              I build and optimize online stores, ensuring smooth user
              experiences and maximizing conversions through effective
              e-commerce solutions.
            </p>
          </div>
          <Link className="butones" to={"/ecommerce"}>About Ecommerce</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
