import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bepper from "../../Assets/Projects/bepper.png";
import qhse from "../../Assets/Projects/qhse.png";
import rooms from "../../Assets/Projects/rooms.png";
import tunify from "../../Assets/Projects/tunify.png";
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
              imgPath={tunify}
              isBlog={false}
              title="Tunify"
              description="Small Application for Music Streaming using Spotify API."
              ghLink="https://github.com/oussamaZAAM/tunify.git"
              demoLink="https://tunify.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bepper}
              isBlog={false}
              title="Bepper"
              description="Personal Project for a Diets & Fitness Application, it calculates the calories of each one and proposes a suitable Diet based on the calories. Built with MERN Stack."
              ghLink="https://github.com/oussamaZAAM/bepper.git"
              demoLink="https://bepper.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rooms}
              isBlog={false}
              title="Rooms"
              description="Social Network Application with many functionalities: Chat, Posting, creating Rooms. Using MERN Stack and Web Sockets"
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
              demoLink="https://royal-books.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
