import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
class LevelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="main-container">
        <Row className="header-row">
          <Col xs={{ span: 12 }}>
            <h2>QA Level</h2>
          </Col>
        </Row>
        <Row className="content-row">
          <Col xs={{ span: 12 }}>
            <Form>
              <Form.Group
                className="mb-3 p-4 bg-light border"
                controlId="formHiringManager"
              >
                <Form.Label> Please indicate Level * </Form.Label>
                <Form.Check type="radio" label="1" id="id-1" />
                <Form.Check type="radio" label="2" id="id-1" />
                <Form.Check type="radio" label="3" id="id-1" />
                <Form.Check type="radio" label="4" id="id-1" />
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

export default LevelPage;
