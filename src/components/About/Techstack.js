import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiAngularSimple,
  DiDocker,
  DiDjango
} from "react-icons/di";
import {
  SiSpringboot,
  SiKubernetes,
  SiNextdotjs,
  SiLaravel,
  SiTravisci,
  SiGithubactions,
  SiHelm,
  SiOctopusdeploy,
} from "react-icons/si";

import {
  IoLogoGitlab
} from "react-icons/io5";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p style={{fontSize: "14px"}}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "14px"}}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p style={{fontSize: "14px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{fontSize: "14px"}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "14px"}}>React.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={{fontSize: "14px"}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p style={{fontSize: "14px"}}>Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
        <p style={{fontSize: "14px"}}>Helm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOctopusdeploy />
        <p style={{fontSize: "14px"}}>ArgoCD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGitlab />
        <p style={{fontSize: "14px"}}>GitLab</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <p style={{fontSize: "14px"}}>Github Actions</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTravisci />
        <p style={{fontSize: "14px"}}>TravisCI</p>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <p style={{fontSize: "14px"}}>Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{fontSize: "14px"}}>Angular.js</p>
      </Col>
    </Row>
  );
}

export default Techstack;
