import "./Ecommerce.css"
import data from "../../Assets/ecommerce";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Ecommerce = () => {
  return (
    <Container>
    <Row className="py-5 gap-5 g-0">
      <h2 className="centered job py-5">E-Commerce</h2>
      {data.map((datas) => (
        <Col key={datas.id} className="box entering">
          <img loading="lazy" className="img-fluid" src={datas.picture} alt={datas.title} />
          <p>{datas.title}</p>
          <p>{datas.description}</p>
          <Link to={datas.link}>Visit Now</Link>
        </Col>
      ))}
    </Row>
    <Row className="py-5 g-0">
      <hr className="text-light"/>
      <h2 className="centered job">Amazon</h2>
        <Col sm={12} md={6} className="px-sm-1 text-light">
        <div className="d-flex flex-column simple-list-example-scrollspy gapped">
          <div>
            <h3>Amazon VA <span className="badge text-bg-secondary">2024</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam, hic dolores laborum expedita minus perspiciatis nam illum magnam quae, ut officia, saepe id quas est in recusandae facere non deleniti? Pariatur, doloribus, at mollitia corporis quis modi in laboriosam distinctio odit tempora dolore maiores. Saepe tempore voluptate qui mollitia?
            </p>
            <span className="badge text-bg-secondary mx-1">Product Research</span>
            <span className="badge text-bg-secondary mx-1">Data Entry</span>
            <span className="badge text-bg-secondary mx-1">Helium 10</span>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Role</p>
              <p className="d-flex justify-content-end align-items-center">Amazon VA</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Deliverables</p>
              <p className="d-flex justify-content-end align-items-center">Helium 10 Data</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Company</p>
              <p className="d-flex justify-content-end align-items-center">Beekman & Cruger</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6} className="px-lg-5 px-sm-1 grid">

        </Col>
    </Row>
      <section className="grid">
        <div className="item view-grid">Product Research</div>
        <div className="item view-grid">Listing Optimization</div>
        <div className="item view-grid">Inventory Management</div>
        <div className="item view-grid">Tracking Shipment</div>
        <div className="item view-grid">Customer Service</div>
        <div className="item view-grid">Flat File</div>
        <div className="item view-grid">FBA Shipments</div>
        <div className="item view-grid">Discrepancies Dispute</div>
        <div className="item view-grid">Keyword Research </div>
        <div className="item view-grid">Helium 10</div>
        <div className="item view-grid">Data Analysis</div>
        <div className="item view-grid">Excel Skills</div>
        <div className="item view-grid">Account Health</div>
      </section>
    </Container>
  );
};

export default Ecommerce;
