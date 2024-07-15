import React from "react";
import about from "../../Assets/about";
import work from "../../Assets/experience";
import nontech from "../../Assets/work";
import { Col, Row } from "react-bootstrap";
import "./About.css";
// import { Link } from "react-router-dom";
const About = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   const hiddenElements = document.querySelectorAll(".hidden");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate");
  //         } else {
  //           entry.target.classList.remove("animate");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, // Adjust this value as needed
  //     }
  //   );

  //   hiddenElements.forEach((element) => {
  //     observer.observe(element);
  //   });
  // });

  return (
    <Row style={{overflow: "auto"}} className="text-light d-flex flex-nowrap align-items-center row-content gap-5">
      <Col sm={12} md={6} className="centered">
        <h1 className="d-flex flex-nowrap">Non-Tech</h1>
      </Col>
      {nontech.map((non) => (
        <Col sm={12} md={6} className="columned gap-5" border="light" key={non.id}>
          <div className="col about-img">
            <img src={non.pic} className="img-fluid" alt={non.title} />
          </div>
          <div className="col">
            <h5>{non.title}</h5>
            <h6>
              <i>{non.description1}</i>
            </h6>
            <p>
              <ul>
                <li>{non.description2}</li>
                <li>{non.description3}</li>
                <li>{non.description4}</li>
              </ul>
            </p>
            <h6 className="text-danger">{non.note}</h6>
          </div>
        </Col>
      ))}
      <Col sm={12} md={6} className="centered">
        <h1 className="d-flex flex-nowrap">Projects</h1>
      </Col>
      {about.map((non) => (
        <Col className="columned gap-5" sm={12} md={6} border="light" key={non.id}>
          <div className="col about-img">
            <img src={non.pic} className="img-fluid" alt={non.title} />
          </div>
          <div className="col">
            <h5 className="mt-0">{non.title}</h5>
            <h6>
              <i>{non.description1}</i>
            </h6>
            <p>
              <ul>
                <li>{non.description2}</li>
                <li>{non.description3}</li>
                <li>{non.description4}</li>
              </ul>
            </p>
            <h6>
              <a href={non.link}>Visit Now!</a>
            </h6>
            <h6 className="text-danger">{non.note}</h6>
          </div>
        </Col>
      ))}
      {work.map((non) => (
        <Col className="columned gap-5" sm={12} md={6} border="light" key={non.id}>
          <div className="col about-img">
            <img src={non.pic} className="img-fluid" alt={non.title} />
          </div>
          <div className="col">
            <h5 className="mt-0">{non.title}</h5>
            <h6>
              <i>{non.description1}</i>
            </h6>
            <p>
              <ul>
                <li>{non.duration}</li>
                <li>{non.description2}</li>
                <li>{non.description3}</li>
                <li>{non.description4}</li>
                <li>{non.description5}</li>
                <li>{non.description6}</li>
                <li>{non.description7}</li>
              </ul>
            </p>
            <h6>
              <a href={non.link}>Visit Now!</a>
            </h6>
            <h6 className="text-danger">{non.note}</h6>
          </div>
        </Col>
      ))}
      {/* <button
        style={{ "--delay": "0.4s" }}
        className="scale-in-center btn btn-primary d-inline-block"
        type="button"
      >
        <Link to={"/"} className="text-light text-unstyled">
          Home
        </Link>
      </button> */}
    </Row>
  );
};

export default About;
