import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../redux/actions";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CoverPage = (props) => {
  const { usersData, isLoading } = useSelector((state) => state);
  console.log("coverpage>>", usersData);
  return (
    <Container className="main-container">
      <Row className="header-row">
        <Col xs={{ span: 12 }}>
          <h2>Open Position Job Title </h2>
        </Col>
      </Row>
      <Row className="content-row">
        <Col xs={{ span: 12 }}>
          <Form className="jdForm">
            <Form.Group
              className="mb-3 p-4 bg-light border"
              controlId="formHiringManager"
            >
              <Form.Label>
                Hiring Manager: Please list your name below *
              </Form.Label>
              <Form.Control type="text" placeholder="Hiring Manger Name" />
            </Form.Group>

            <Form.Group
              className="mb-3 p-4 bg-light border"
              controlId="formHiringTitle"
            >
              <Form.Label>
                Please list the job title you are hiring for below: *
              </Form.Label>
              <Form.Control type="text" placeholder="Hiring Title" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="button-row">
        <Col xs={{ span: 6, offset: 6 }} md={{ span: 3, offset: 9 }}>
          <Button onClick={props.nextStep} variant="primary" type="submit">
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CoverPage;
