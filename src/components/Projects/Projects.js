import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bepper from "../../Assets/Projects/bepper.png";
import qhse from "../../Assets/Projects/qhse.png";
import rooms from "../../Assets/Projects/rooms.png";
import nutrilab from "../../Assets/Projects/nutrilab.png";
import royalBooks from "../../Assets/Projects/royalBooks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrilab}
              isBlog={false}
              title="NutriLab"
              description="Application that helps you Balance your Food based on your sex, age, body measurements and your daily activity. This App will give you as well the ability to customize your food accordingly. Built with NextJS and TailwindCSS"
              ghLink=""
              demoLink="https://nutrilab.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bepper}
              isBlog={false}
              title="Bepper"
              description="Personal Project for a Diets & Fitness Application, it calculates the calories of each one and proposes a suitable Diet based on the calories. Built with MERN Stack."
              ghLink="https://github.com/oussamaZAAM/bepper.git"
              demoLink="https://bepper.cyclic.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rooms}
              isBlog={false}
              title="Rooms"
              description="Social Network Application with many functionalities: Chat, Posting, creating Rooms. Using MERN Stack and Web Socket"
              ghLink="https://github.com/oussamaZAAM/Room.git"
              demoLink="https://pfa-rooms.herokuapp.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qhse}
              isBlog={false}
              title="QHSE"
              description="Application for the management of the quality of business services. Built with MERN Stack"
              ghLink="https://github.com/oussamaZAAM/qhse.git"
              demoLink="https://qhse-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={royalBooks}
              isBlog={false}
              title="Royal Books"
              description="Application for an online Book Store built with Vanilla JS."
              ghLink="https://github.com/oussamaZAAM/RoyalBooks.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
