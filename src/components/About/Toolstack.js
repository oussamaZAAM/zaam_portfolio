import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiIntellij } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{fontSize: "14px"}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize: "14px"}}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
        <p style={{fontSize: "14px"}}>IntelliJ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize: "14px"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{fontSize: "14px"}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: "14px"}}>Git</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
