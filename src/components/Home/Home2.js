import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatars1.svg";
import Tilt from "react-parallax-tilt";
import Projects from "../Projects/Projects"

import {
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="gradient"> ME </span> 
            </h1>
            <p className="home-about-body">
              Just a web development enthusiast... 
              <br />              
              <br />
              
              I am passionate about developing products using <b className="">Node.js</b> and
              <i>
                <b className="">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className=""> React.js, Next.js and TypeSript.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NVHoaiDT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/NVHoaiDT1020/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Projects></Projects>
    </Container>
  );
}
export default Home2;
