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
import ex01 from "../../Assets/Projects/ex01.png"
import ex02 from "../../Assets/Projects/ex02.png"
import ex03 from "../../Assets/Projects/ex03.png"
import ex04 from "../../Assets/Projects/ex04.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Class <strong className="gradient">Exams </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my weekly exam submission.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Email & Modify JSP"
              description="Setting up the development environment, IDE, getting familiar with Java Servlet programming, learn the basics of creating, deploying, and testing Java Servlets."
              ghLink="https://java-web-u9i4.onrender.com/email"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex02}
              isBlog={false}
              title="Survey"
              description="The three-tier architecture and the Model-View-Controller (MVC). Learn to create Java Servlets with basic methods such as doGet() and doPost()."
              ghLink="https://java-web-u9i4.onrender.com/survey/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex02}
              isBlog={false}
              title="New-JSP for Survey"
              description="Modify the HTML document for the Email List application, and you’ll create a new servlet that responds to the HTML document."
              ghLink="https://java-web-u9i4.onrender.com/survey/"              
            />
          </Col>

          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex03}
              isBlog={false}
              title="Shopping Card"
              description="No description........................................."
              ghLink="https://java-web-u9i4.onrender.com/shopping-cart/"              
            />
          </Col>

          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex04}
              isBlog={false}
              title="SQL Connection"
              description="SQL Connection with JSP"
              ghLink="https://testwebdeploy-kn1p.onrender.com/Week8_SQLconnection/"              
            />
          </Col>
          <Col md={4} className="project-cart">
            <ProjectCard
              imgPath={ex01}
              isBlog={false}
              title="Connection Pool"
              description="Connection Pool"
              ghLink="https://testwebdeploy-kn1p.onrender.com/Week8_SQLconnection/"              
            />
          </Col>

          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
