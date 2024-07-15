import React, { useEffect } from "react";
import "./Credits.css";
import { Col, Row } from "react-bootstrap";
import pic1 from "../../Assets/Images/NATexam.jpg";
import pic2 from "../../Assets/Images/kodego.png";
import pic3 from "../../Assets/Images/Anthony Bernard Cereno.png";
import { Link } from "react-router-dom";


const Credits = () => {
    useEffect(() => {
        const credits = document.querySelector(".credits");
    
        if (credits) {
          // Trigger the animation on component load
          credits.style.animationPlayState = "running";
    
          const handleMouseOver = () => {
            credits.style.animationPlayState = "paused";
          };
    
          const handleMouseOut = () => {
            credits.style.animationPlayState = "running";
          };
    
          credits.addEventListener("mouseover", handleMouseOver);
          credits.addEventListener("mouseout", handleMouseOut);
    
          // Clean up event listeners on component unmount
          return () => {
            credits.removeEventListener("mouseover", handleMouseOver);
            credits.removeEventListener("mouseout", handleMouseOut);
          };
        }
      }, []);
  return (
    <Row className="ç row-credit">
    <Col className="credit-container gap-5">
            <div className="inside-credit credits d-flex flex-column gap-3">
              <h1>Credits</h1>
              <div>
                <img
                  className="img-fluid"
                  src={pic1}
                  alt="National Career Assessment Exam"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src={pic2}
                  alt="Kodego Certificate"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src={pic3}
                  alt="Anthony Bernard Cereno"
                />
              </div>
              <h1>The End</h1>
              <Link className="btn btn-primary" to={"/"}>
                Back to Home
              </Link>
            </div>
    </Col>
  </Row>
  )
}

export default Credits