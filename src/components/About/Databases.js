import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiMongodb,
  DiMysql,
  DiPostgresql
} from "react-icons/di";
import {
  SiNeo4J
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: "14px"}}>MongDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{fontSize: "14px"}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={{fontSize: "14px"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeo4J />
        <p style={{fontSize: "14px"}}>Neo4j</p>
      </Col>
    </Row>
  );
}

export default Databases;
