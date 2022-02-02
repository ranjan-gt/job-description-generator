import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
class JdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="main-container">
        <Row className="header-row">
          <Col xs={{ span: 12 }}>
            <h2>Download JD</h2>
          </Col>
        </Row>
        <Row className="content-row">
          <Col xs={{ span: 12 }}>Sample Jd</Col>
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
              Download JD
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JdPage;
