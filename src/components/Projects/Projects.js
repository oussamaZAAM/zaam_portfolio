import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import royalBooks from "../../Assets/Projects/royalBooks.png";
import rooms from "../../Assets/Projects/rooms.png";
import qhse from "../../Assets/Projects/qhse.png";
import bepper from "../../Assets/Projects/bepper.png";
import nutrilab from "../../Assets/Projects/nutrilab.png";
import rankmyoutfit from "../../Assets/Projects/rankmyoutfit.jpg";
import ata_dashboard from "../../Assets/Projects/ata_dashboard.png";
import aleeconseil from "../../Assets/Projects/aleeconseil.png";
import next_scrambler from "../../Assets/Projects/next_scrambler.png";
import youscout from "../../Assets/Projects/youscout.png";
import youscout_back from "../../Assets/Projects/youscout_back.png";

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
              imgPath={youscout_back}
              isBlog={false}
              title="YouScout - Backend"
              description="The backend following a Microservices architecture. Built with Spring, and using Maven, gitLab, Kubernetes for CI/CD."
              ghLink="https://gitlab.com/Hamdane10/you-scout.git"
              demoLink="https://drive.google.com/file/d/1Pq9CvJ9vC0X-0-u3IC-8oGjog4Yd-tSx/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youscout}
              isBlog={false}
              title="YouScout"
              description="A social network in the form of a mobile application aimed at football fans around the world. Frontend built with React Native"
              ghLink="https://github.com/oussamaZAAM/youscout-app.git"
              demoLink="https://drive.google.com/file/d/1Pq9CvJ9vC0X-0-u3IC-8oGjog4Yd-tSx/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next_scrambler}
              isBlog={false}
              title="Next-Scrambler"
              description="Extension for Next.js, to encrypt and decrypt images with a private key, to help websitesprotect their images from being stolen."
              ghLink="https://github.com/oussamaZAAM/next-scrambler.git"
              demoLink="https://github.com/oussamaZAAM/next-scrambler.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aleeconseil}
              isBlog={false}
              title="Alee Conseil"
              description='Alee Conseil is a company in the field of software development consulting and training. It offers products to the general public and businesses. Complete Website from Dev to SEO (Google Search Console / Insights) '
              ghLink="https://github.com/oussamaZAAM/test2.git"
              demoLink="https://www.aleeconseil.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ata_dashboard}
              isBlog={false}
              title="ATA E-learning Dashboard"
              description="E-Learning Automation Tester Academy platform, where the student can follow their journey. Build with Next.js for Frontend and Backend Authentication by roles (Guest, User, Admin)"
              ghLink="https://github.com/oussamaZAAM/ata-platform-front.git"
              demoLink="https://ata-platform-front.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rankmyoutfit}
              isBlog={false}
              title="rankMyOutfit"
              description="Website to help people choose their best outfits using artificial intelligence, or using a platform that allows users to rate other people's outfits."
              ghLink="https://github.com/oussamaZAAM/rankmyOutfit.git"
              demoLink="https://rankmyoutfit.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrilab}
              isBlog={false}
              title="NutriLab"
              description="Application that helps you Balance your Food based on your sex, age, body measurements and your daily activity. This App will give you as well the ability to customize your food accordingly. Built with NextJS and TailwindCSS"
              ghLink="https://github.com/oussamaZAAM/NutriLab.git"
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
