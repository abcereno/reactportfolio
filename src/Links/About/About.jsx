import React, { useEffect, useState } from "react";
import "./About.css";
import Spline from "@splinetool/react-spline";
import MyLoader from "../../Common/MyLoader/MyLoader";
import { Col, Container, Row } from "react-bootstrap";
import { id, kodego } from "../../Assets/Images/images";
import { Link } from "react-router-dom";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container>
      <Row className="row-content">
        <Col sm={12} md={5} className="spline-container">
          {isLoading ? (
            <MyLoader />
          ) : (
            <div className="simple-list-example-scrollspy centered">
              <div className={`spline centered ${isLoading ? "d-none" : ""}`}>
                <Spline className="centered" scene="https://prod.spline.design/7hQVzQV-tjbJ4NMR/scene.splinecode" />
              </div>
            </div>
          )}
        </Col>
        <Col sm={12} md={7} className="pt-5 about d-flex flex-column">
          <div className="about-first d-flex flex-column gap-5">
            <div>
              <h2 className="centered job">AB</h2>
              <h2 className="centered job">Cereno</h2>
              <p className="fs-24">
                I am passionate about helping businesses thrive in the digital age
              </p>
            </div>
            <h6 className="text-light animate">More Info ↓</h6>
          </div>
          <div className="`about-second` entering my-5">
            <h3 className="py-sm-1 py-md-5">Your Partner in Bringing Your Web Design Vision to Life</h3>
            <p>
              As a freelance web designer and developer, I bring a unique
              combination of creativity and technical expertise to every
              project. With a keen eye for design and a passion for delivering
              user-friendly web experiences, I work closely with clients to
              understand their needs and bring their vision to life.
            </p>
            <p>
              My approach is rooted in collaboration and communication, and I
              take pride in my ability to explain technical concepts in simple
              terms. Whether I'm developing a new website from scratch or
              optimizing an existing site for search engines, I always strive
              for excellence in both form and function. With a dedication to
              quality and a commitment to staying on top of the latest trends
              and technologies, I am confident in my ability to deliver
              exceptional results that exceed my clients' expectations.
            </p>
            <div className="centered bg-dark">
              <img
                id="profilePic"
                className="img-fluid filter"
                src={id}
                alt="Anthony Bernard Cereno"
              />
            </div>
          </div>
          <div className="about-third entering">
            <div className="grid-about">
              <div className="social grid-item">
                <Link className="text-decoration-none d-flex justify-content-between" to={"https://www.facebook.com/abcereno"}>
                <p className="m-0">Facebook</p>
                </Link>
              </div>
              <div className="social grid-item">
              <Link className="text-decoration-none d-flex justify-content-between" to={"https://www.onlinejobs.ph/jobseekers/info/2598500"}>
                <p className="m-0">Onlinejobs</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="about-fourth entering my-5">
            <div>
              <h3>Bootcamp</h3>
              <img
                loading="lazy"
                className="img-fluid"
                src={kodego}
                alt="KodeGo Fullstack Web Development Bootcamp"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
