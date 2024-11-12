import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ex01 from "../../Assets/Projects/ex01.png";
import ex02 from "../../Assets/Projects/ex02.png";
import ex03 from "../../Assets/Projects/ex03.png";
import ex04 from "../../Assets/Projects/ex04.png";
import jpa from "../../Assets/Projects/jpa.png";
import shopping from "../../Assets/Projects/shopping.png";

import wordle from "../../Assets/Projects/wordle.avif";
import blog from "../../Assets/Projects/blog.png";
import next from "../../Assets/Projects/next.png";
import hdtFood from "../../Assets/Projects/hdt-food.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Class <strong className="gradient">Exams </strong>
        </h1>
        <p style={{ color: "white" }}>Here are my weekly exam submission.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Email"
              description="Setting up the development environment, IDE, getting familiar with Java Servlet programming... Updated to check empty field"
              ghLink="https://java-web-u9i4.onrender.com/email"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex02}
              isBlog={false}
              title="Survey"
              description="Basic form's component and the three-tier architecture and the Model-View-Controller (MVC)."
              ghLink="https://java-web-u9i4.onrender.com/survey/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Email - doGet/doPost"
              description="Learn to create Java Servlets with basic methods such as doGet() and doPost()."
              ghLink="https://java-web-u9i4.onrender.com/email-get-post/"
            />
          </Col>

          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Email JSTL"
              description="Updated JSTL for java mail excersice"
              ghLink="https://testwebdeploy-kn1p.onrender.com/email-jstl/"
            />
          </Col>
          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Cart"
              description="Basic shopping cart (session updated)"
              ghLink="https://java-web-u9i4.onrender.com/shopping-cart/"
            />
          </Col>
          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Cart with session"
              description="Apply session for Basic shopping cart"
              ghLink="https://java-web-u9i4.onrender.com/shopping-cart-session"
            />
          </Col>

          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex04}
              isBlog={false}
              title="SQL Gateway"
              description="Interact with database by using JDBC and MySQL"
              ghLink="https://java-web-u9i4.onrender.com/sqlGateway/"
            />
          </Col>

          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Email JPA"
              description="Update JPA for email exercise"
              ghLink="https://java-web-u9i4.onrender.com/email-jpa"
            />
          </Col>
          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Send Email"
              description="Send email with Java Mail API."
              ghLink="https://java-web-u9i4.onrender.com/email-jpa"
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="project-heading">
          <strong className="gradient">Labor</strong> of{" "}
          <strong className="gradient-light">Love</strong>
        </h1>
        <p style={{ color: "white" }}>
          My humble projects built with Node.js stack.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="HDT Blog"
              description="My interactive React-based personal blog (still in develop process)."
              ghLink="https://nvhoaidt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Wordle"
              description="A React-based word puzzle game inspired by Wordle."
              ghLink="https://github.com/NVHoaiDT/word-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next}
              isBlog={false}
              title="Next Financial"
              description="A project implementing basic Next.js features including error handling, authentication..."
              ghLink="https://github.com/NVHoaiDT/next-financial-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hdtFood}
              isBlog={false}
              title="HDT Food"
              description="A responsive site focusing on business and startups web design principles."
              ghLink="https://github.com/NVHoaiDT/hdt-food"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
