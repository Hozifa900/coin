import React from "react";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../Model/DataContext";
import Mode from "../../Data/Mode";
import Mobile from "../../Data/Mobile";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import Header from "../../Components/Header/Header";
import "./Hero.css";
import machine from "./machine.json";
import data from "./data.json";
import Lottie from "lottie-react";

export default function Hero() {
  const [mode, setMode, mobile, setMobile] = useContext(DataContext);
  const background = {
    backgroundImage: `url("./assets/${mode.heroImg}")`,
  };

  // Here to change newsletter section to be fit when screen is small
  const mobileStyle = {
    display: mobile.machineDisplay,
    height: "300px",
    position: "absolute",
    right: "50px",
    bottom: "0px",
  };

  // This to rotate the coin while scrolling
  const [ro, setRo] = React.useState(0);
  const sty = {
    position: "absolute",
    right: "50%",
    marginRight: "-50px",
    transform: `rotateY(${ro}deg)`,
    bottom: "0px",
    width: "100px",
    transition: "transform all 0.4s",
  };
  const lottieRef = useRef(null);
  React.useEffect(() => {
    lottieRef.current.pause();
    lottieRef.current.play();
  }, []);

  window.addEventListener("scroll", () => {
    setRo(window.scrollY);
  });

  const Play = () => {
    const c = lottieRef.current.play();
  };
  const Pause = () => {
    const c = lottieRef.current.pause();
  };

  // if desktop, then display the machine animation
  useEffect(() => {
    if (window.screen.width < 500) {
      setMobile(Mobile.mobile);
    } else {
      setMobile(Mobile.desktop);
    }
  }, []);

  return (
    <div className="hero" style={background}>
      <Header />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={6}>
            <p className="hero-title">
              Elrond's First Platform for Lending and Borrowing Crypto Assets
            </p>
          </Col>
        </Row>
      </Container>

      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={true}
        style={{
          height: "300px",
          position: "absolute",
          left: "0px",
          bottom: "0px",
          zIndex: "1000",
        }}
      />
      <Lottie
        lottieRef={lottieRef}
        animationData={machine}
        loop={true}
        style={mobileStyle}
      />
      <img src="./assets/coin.png" style={sty} />
    </div>
  );
}
