import "./Fullstack.css"
import data from "../../Assets/fullstack";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bestclean, grp, ntas } from "../../Assets/Images/images";

const Fullstack = () => {
  return (
    <Container>
      <Row className="py-5 g-0">
        <h2 className="centered job py-5 z-1">
          Web Development
        </h2>
        <Col sm={12} md={6} className="px-sm-1 text-light">
        <div className="d-flex flex-column simple-list-example-scrollspy gapped">
          <div>
            <h3>Student <span className="badge text-bg-secondary">2023</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam, hic dolores laborum expedita minus perspiciatis nam illum magnam quae, ut officia, saepe id quas est in recusandae facere non deleniti? Pariatur, doloribus, at mollitia corporis quis modi in laboriosam distinctio odit tempora dolore maiores. Saepe tempore voluptate qui mollitia?
            </p>
            <span className="badge text-bg-secondary mx-1">HTML5</span>
            <span className="badge text-bg-secondary mx-1">CSS3</span>
            <span className="badge text-bg-secondary mx-1">Bootstrap</span>
            <span className="badge text-bg-secondary mx-1">Javascript</span>
            <span className="badge text-bg-secondary mx-1">ReactJs</span>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Role</p>
              <p className="d-flex justify-content-end align-items-center">Developer</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Deliverables</p>
              <p className="d-flex justify-content-end align-items-center">Web Design, FrontEnd</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Timeframe</p>
              <p className="d-flex justify-content-end align-items-center">1-2 weeks</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6} className="px-lg-5 px-sm-1">
          <div className="centered flex-column gap-5 z-0">
            {data.map((datas) => (
              <div
                style={{ background: `url(${datas.path})` }}
                key={datas.id}
                className="box entering fullstack-container"
              >
                <div className="fullstack-bg p-0">
                  <p>{datas.title}</p>
                  <p>{datas.description}</p>
                  <p className="text-small text-danger">{datas.note}</p>
                  <Link target="_blank" to={datas.link}>
                    Visit Now
                  </Link>
                  </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="py-5 g-0">
        <Col sm={12} md={6} className="px-sm-1 text-light">
        <div className="d-flex flex-column simple-list-example-scrollspy gapped">
          <div>
            <h3>Wix Developer <span className="badge text-bg-secondary">2023</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam, hic dolores laborum expedita minus perspiciatis nam illum magnam quae, ut officia, saepe id quas est in recusandae facere non deleniti? Pariatur, doloribus, at mollitia corporis quis modi in laboriosam distinctio odit tempora dolore maiores. Saepe tempore voluptate qui mollitia?
            </p>
            <span className="badge text-bg-secondary mx-1">Wix</span>
            <span className="badge text-bg-secondary mx-1">Backend</span>
            <span className="badge text-bg-secondary mx-1">JQuery</span>
            <span className="badge text-bg-secondary mx-1">Database</span>
            <span className="badge text-bg-secondary mx-1">CMS</span>
          </div>
              <Link target="_blank" to={"https://www.loom.com/share/dd81681344f54cff9617d2a97ee7d368?sid=21e63494-0cf9-4cd8-8014-0d56fd08a9e3"}>Watch Sample</Link>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Role</p>
              <p className="d-flex justify-content-end align-items-center">Backend Developer</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Deliverables</p>
              <p className="d-flex justify-content-end align-items-center">Backend, Webhooks</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Timeframe</p>
              <p className="d-flex justify-content-end align-items-center">1 week</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6} className="px-lg-5 px-sm-1">
          <div className="centered flex-column gap-5 z-0">
              <div
                style={{ background: `url(${bestclean})` }}
                className="box entering fullstack-container"
              >
                <div className="fullstack-bg p-lg-5">
                  <p>Best Cleaning Co.</p>
                  <p>Collaboration - Worked with a Wix Designer to work on the calculator for a cleaning company</p>
                  <p className="text-small text-danger">Some things might have changed</p>
                  <Link target="_blank" to={"https://bestcleaning.co/"}>
                    Visit Now
                  </Link>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
      <Row className="py-5 g-0">
        <Col sm={12} md={6} className="px-sm-1 text-light">
        <div className="d-flex flex-column simple-list-example-scrollspy gapped">
          <div>
            <h3>FrontEnd Developer <span className="badge text-bg-secondary">2023</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam, hic dolores laborum expedita minus perspiciatis nam illum magnam quae, ut officia, saepe id quas est in recusandae facere non deleniti? Pariatur, doloribus, at mollitia corporis quis modi in laboriosam distinctio odit tempora dolore maiores. Saepe tempore voluptate qui mollitia?
            </p>
            <span className="badge text-bg-secondary mx-1">HTML5</span>
            <span className="badge text-bg-secondary mx-1">CSS3</span>
            <span className="badge text-bg-secondary mx-1">Bootstrap</span>
            <span className="badge text-bg-secondary mx-1">Javascript</span>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Role</p>
              <p className="d-flex justify-content-end align-items-center">FrontEnd Developer</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Deliverables</p>
              <p className="d-flex justify-content-end align-items-center">FrontEnd, APIs</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Timeframe</p>
              <p className="d-flex justify-content-end align-items-center">1 week</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6} className="px-lg-5 px-sm-1">
          <div className="centered flex-column gap-5 z-0">
              <div
                style={{ background: `url(${ntas})` }}
                className="box entering fullstack-container"
              >
                <div className="fullstack-bg p-lg-5">
                  <p>NTAS</p>
                  <p>Sample Only - Key Feature of the school system of NTAS</p>
                  <p className="text-small text-danger">wrote 800+ lines of javascript</p>
                  <Link target="_blank" to={"https://abcereno.github.io/firstTask/"}>
                    Visit Now
                  </Link>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
      <Row className="py-5 g-0">
        <Col sm={12} md={6} className="px-sm-1 text-light">
        <div className="d-flex flex-column simple-list-example-scrollspy gapped">
          <div>
            <h3>FullStack Developer <span className="badge text-bg-secondary">2024</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam, hic dolores laborum expedita minus perspiciatis nam illum magnam quae, ut officia, saepe id quas est in recusandae facere non deleniti? Pariatur, doloribus, at mollitia corporis quis modi in laboriosam distinctio odit tempora dolore maiores. Saepe tempore voluptate qui mollitia?
            </p>
            <span className="badge text-bg-secondary mx-1">ReactJs</span>
            <span className="badge text-bg-secondary mx-1">CSS3</span>
            <span className="badge text-bg-secondary mx-1">Bootstrap</span>
            <span className="badge text-bg-secondary mx-1">SEO</span>
            <span className="badge text-bg-secondary mx-1">Laravel</span>
            <span className="badge text-bg-secondary mx-1">MySQL</span>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Role</p>
              <p className="d-flex justify-content-end align-items-center">FullStack Developer</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Deliverables</p>
              <p className="d-flex justify-content-end align-items-center">FrontEnd, Backend, Database</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between border-bottom">
              <p className="d-flex justify-content-start align-items-center">Timeframe</p>
              <p className="d-flex justify-content-end align-items-center">2 weeks</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6} className="px-lg-5 px-sm-1">
          <div className="centered flex-column gap-5 z-0">
              <div
                style={{ background: `url(${grp})` }}
                className="box entering fullstack-container"
              >
                <div className="fullstack-bg p-lg-5">
                  <p>GRP Financial Solutions</p>
                  <p>Lead fills up the form, the manager and the owner gets emailed for free and the lead information is stored in the database</p>
                  <p className="text-small text-danger">Freelance</p>
                  <Link target="_blank" to={"https://grpfinancialsolutions.com/"}>
                    Visit Now
                  </Link>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Fullstack;
