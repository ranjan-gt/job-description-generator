import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="main-container">
        <Row className="header-row">
          <Col xs={{ span: 12 }}>
            <h2>Company Info - A bit about us </h2>
          </Col>
        </Row>
        <Row className="content-row">
          <Col xs={{ span: 12 }}>
            <Form>
              <Form.Group
                className="mb-3 p-4 bg-light border"
                controlId="formHiringManager"
              >
                <Form.Label>Please select the below * </Form.Label>
                <Form.Check
                  type="radio"
                  label="Ground Truth is the leading location-based marketing and advertising technology company. Sitting at the convergence of offline and online data, GroundTruth delivers a unique data set called “visitation data,” which allows brands, agencies, SMBs, and non-profits to drive high-performing business outcomes (ROI). GroundTruth activates this data through a suite of performance products and services via their self-serve advertising platform, through managed services, or tailored partnerships. GroundTruth has built proprietary filtering processes that combines our Blueprint contextual mapping technology, owned & operated properties, along with 3rd party mobile location data, together yielding over 30B visits annually. We believe that innovative technology starts with the best talent and were recently ranked of Ad Age’s 2021 Best Places to Work. Learn more about the perks of joining our team here.firm"
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
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompanyInfo;
