import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { reduxForm, Field } from "redux-form";
class JdFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="main-container">
        <Row className="header-row">
          <Col xs={{ span: 12 }}>
            <h2>QA Level 4</h2>
          </Col>
        </Row>
        <Row className="content-row">
          <Col xs={{ span: 12 }}>
            <Form>
              <Form.Group
                className="mb-3 p-4 bg-light border"
                controlId="formHiringManager"
              >
                <Form.Label> Please select the below: *</Form.Label>
                <Form.Check
                  type="radio"
                  label="Level Description: Recognized master in professional discipline with significant impact and influence on organization policy and program development. Establishes critical strategic and operational goals; develops and implements new products, processes, standards or operational plans to achieve strategies. Regularly leads projects of critical importance to the organization; these projects carry substantial consequences of success or failure. Requires significant influence and communication with executive leadership. Problems faced are frequently complex and multidimensional, requiring broad based consideration of variables that impact multiple areas of the organization."
                  id="id-1"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 p-4 bg-light border"
                controlId="formHiringManager"
              >
                <Form.Label>
                  {" "}
                  [Please check off every box] You will: *
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  label="1) Provide technical leadership across the orgainization to improve and standardize our QA practices"
                  id="id-1"
                />
                <Form.Check
                  type="checkbox"
                  label="2) Design and develop test suites for applications through active discussion wth product, engineering, and stakeholders"
                  id="id-1"
                />
                <Form.Check
                  type="checkbox"
                  label="3) Review unit tests produced by engineers and help them to improve"
                  id="id-1"
                />
                <Form.Check
                  type="checkbox"
                  label="4) Assist other QA staff in their daily activities"
                  id="id-1"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="button-row">
          <Col xs="4" md="3">
            <Button
              onClick={this.props.previousStep}
              variant="primary"
              type="submit"
            >
              Previous
            </Button>
          </Col>
          <Col xs={{ span: 4, offset: 4 }} md={{ span: 3, offset: 6 }}>
            <Button
              onClick={this.props.nextStep}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JdFormPage;
