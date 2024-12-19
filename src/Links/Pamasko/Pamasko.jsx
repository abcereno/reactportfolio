import { useState } from "react";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pamasko = () => {
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState({
    name: "",
    relationship: "",
    message: "",
    terms: agree,
    navigate: useNavigate(),
  });

  const togglePassword = () => {
    setAgree(!agree);
  };
  // form submit for login with api
  const formSubmit = (e) => {
    e.preventDefault();
    // create data to hold the values to be passed in to axios
    const data = {
      name: state.name,
      relationship: state.relationship,
    };
    //include post axios template
    axios
      .post("/register", data)
      .then((response) => {
        if (response) {
            return state.navigate("/choose-inaanak");
        }
      })
      .catch((error) => {
        setState({ ...state, message: error.response.data.message });
      });
  };
  // show error messages for frontend
  let err_message = "";
  if (state.message) {
    err_message = (
      <Alert key="danger" variant="danger">
        {state.message}
      </Alert>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="centered py-5">
          <Form
            onSubmit={formSubmit}
            id="submitform"
            className="p-5 mt-5 rounded col-lg-8 butones text-light"
          >
            <h3 className="text-center">Pamasko Exemption Form</h3>
            {err_message}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required
                onChange={(e) => setState({ ...state, name: e.target.value })}
                name="name"
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRelationship">
            <Form.Label>Relationship:</Form.Label>
            <Form.Select
            required
             onChange={(e) => setState({ ...state, relationship: e.target.value })}
             aria-label="Default select example"
             >
              <option>What is you relationship with the child</option>
              <option value="family">Family</option>
              <option value="godgarent">GodParent</option>
              <option value="other">Other</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <input
                required
                type="checkbox"
                checked={agree}
                onChange={togglePassword}
              />{" "}
              I am an honest person
            </Form.Group>
            <button
              variant="primary"
              type="submit"
              className="butones text-light"
            >
              Get Exempted
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Pamasko;
