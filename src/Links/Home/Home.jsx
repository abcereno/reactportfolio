import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import MyLoader from "../../Common/MyLoader/MyLoader";
import fb from "../../Assets/Images/fb.png";
import fiverr from "../../Assets/Images/fiverr.png";
import onlinejobs from "../../Assets/Images/onlinejob.png";
import next from "../../Assets/Images/next.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const jobs = [
    "FullStack Web Developer",
    "Amazon VA",
    "Google Ads Manager",
    "Data Entry",
    "Store Manager",
    "GoHighLevel",
    "Ninja Automations",
  ];
  const [role, setRole] = useState("");
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setRole(jobs[index]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      index = (index + 1) % jobs.length;
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Row className="row-content">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div className="spline">
            {isLoading && <MyLoader />}
            <Spline
              scene="https://prod.spline.design/7hQVzQV-tjbJ4NMR/scene.splinecode"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h2>Hi! I am</h2>
          <h1 className="name ant">AnthonY</h1>
          <h3 className="role">{role}</h3>
          <div className="centered gap-2">
            <a
              className="btn btn-primary"
              href="https://www.fiverr.com/anthonybernardc"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-links" src={fiverr} alt="www.fiverr.com" />
            </a>
            <a
              className="btn btn-primary"
              href="https://www.onlinejobs.ph/jobseekers/info/2598500"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-links"
                src={onlinejobs}
                alt="www.onlinejob.ph"
              />
            </a>
            <a
              className="btn btn-primary"
              href="https://www.facebook.com/abcereno/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-links" src={fb} alt="www.facebook.com" />
            </a>
            <Link className="btn btn-primary nextpage" to={"/credits"}>
              <img className="img-links" src={next} alt="Next Page" />
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
