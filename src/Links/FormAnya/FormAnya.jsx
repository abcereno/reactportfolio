import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Alert, Container, Row, Col } from "react-bootstrap";
const FormAnya = () => {
  // set the state of variables using useState hook
  const [state, setState] = useState({
    name: "",
    dateofbaptism: "",
    dateofbirth: "",
    kamukha: "",
    hobby: "",
    message: "",
    loggedin: false,
    navigate: useNavigate(),
  });

  // form submit for login with api
  const formSubmit = (e) => {
    e.preventDefault();
    // create data to hold the values to be passed in to axios
    const data = {
      name: state.name,
      dateofbaptism: state.dateofbaptism,
      dateofbirth: state.dateofbirth,
      kamukha: state.kamukha,
      hobby: state.hobby
    };
    console.log(data);
          document.getElementById("submitform").reset();
    //include post axios template
    // axios
    //   .post("/register", data)
    //   .then((response) => {
    //     if (response) {
    //     }
    //   })
    //   .catch((error) => {
    //     setState({ ...state, message: error.response.data.message });
    //   });
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
  // after loggedin redirect to profile
  if (state.loggedin) {
    return state.navigate("/profile");
  }

  return (
    <Container>
      <Row>
        <Col className="centered py-5 text-light">
          <Form
            onSubmit={formSubmit}
            id="submitform"
            className="mt-5 py-5 rounded col-lg-8 butones text-light"
          >
            <h2 className="text-center">Anya</h2>
            {err_message}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                required
                onChange={(e) => setState({ ...state, name: e.target.value })}
                name="name"
                type="text"
                // pattern="[A-Za-z0-9!@#$%^&*()_+]{8,50}"
                pattern="^[A-Za-z]{10,40}$"
                placeholder="Enter Full Name"
              />
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text text-danger">
                  with middle initial*
                </span>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Baptism:</Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setState({ ...state, dateofbaptism: e.target.value })
                }
                name="dateofbaptism"
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setState({ ...state, dateofbirth: e.target.value })
                }
                name="dateofbirth"
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRelationship">
              <Form.Label>Sinong Kamukha:</Form.Label>
              <Form.Select
                required
                onChange={(e) =>
                  setState({ ...state, kamukha: e.target.value })
                }
                aria-label="Default select example"
              >
                <option>Choose a parent</option>
                <option value="family">Daddy</option>
                <option value="godgarent">Mommy</option>
              </Form.Select>
              <div class="col-auto">
                <span class="form-text text-danger">
                  be honest*
                </span>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRelationship">
              <Form.Label>Favorite Hobby:</Form.Label>
              <Form.Select
                required
                onChange={(e) =>
                  setState({ ...state, hobby: e.target.value })
                }
                aria-label="Default select example"
              >
                <option>Choose A Hobby</option>
                <option value="kumain">kumain</option>
                <option value="gumala">gumala</option>
                <option value="gadget">gadget</option>
                <option value="drawing">drawing</option>
              </Form.Select>
            </Form.Group>
            <div className="centered">
            <button type="submit" className="mb-3 butones text-light">
              Submit
            </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormAnya;
