import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";
import Feature from "./Feature";

export default function Features() {
  const [mode, setMode] = useContext(DataContext);
  const background = {
    backgroundImage: `url("./assets/${mode.featuresImg}")`,
  };
  return (
    <div className="features" style={background}>
      <Container className="features-content">
        <Row style={{ width: "100%" }}>
          <Col xs={12} md={3}>
            <Feature title="Feature Title 1" body="Feature description 1." />
          </Col>
          <Col xs={12} md={3}>
            <Feature title="Feature Title 2" body="Feature description 2." />
          </Col>
          <Col xs={12} md={3}>
            <Feature title="Feature Title 3" body="Feature description 3." />
          </Col>
          <Col xs={12} md={3}>
            <Feature title="Feature Title 4" body="Feature description 4." />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
