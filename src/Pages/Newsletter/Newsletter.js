import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import "./Newsletter.css";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function Newsletter() {
  const [mode, setMode, mobile, setMobile] = useContext(DataContext);
  const background = {
    backgroundColor: mode.color,
  };
  const newsletterWidth = {
    width: mobile.newsletterWidth,
  };
  const [email, setEmail] = React.useState("k");
  const [emailError, setEmailError] = React.useState("");
  const sendEmail = () => {
    const valid = document.getElementById("email").value;
    const isvalid = valid.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!isvalid) setEmailError("Please enter a valid email address");
    else setEmailError("");
  };
  return (
    <div className="newsletter" style={background}>
      <Container className="newsletter">
        <Row>
          <Col
            xs={12}
            md={12}
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="text-center mb-4" style={{ color: "gold" }}>
              Newsletter
            </h1>
            <InputGroup className="mb-3" style={newsletterWidth}>
              <FormControl
                placeholder="Subscribe Newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                id="email"
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={sendEmail}
              >
                Subscribe
              </Button>
            </InputGroup>
            <font style={{ color: "red" }}>{emailError}</font>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
