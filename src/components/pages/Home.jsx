import React, { useContext } from "react";
import { Nav, Row, Col, Container } from "react-bootstrap";
import NewsList from "../NewsList";
import { AppContext } from "../../App";

const Home = () => {
  const { handleCategory } = useContext(AppContext);

  return (
    <Container>
      <Row>
        <Col xs={12} md={3} className="bg-dark text-light rounded p-3 my-3">
          <h5>Categories</h5>
          <Nav className="flex-column">
            <Nav.Link className="text-light" onClick={() => handleCategory(1)}>
              World
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => handleCategory(2)}>
              Sports
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => handleCategory(3)}>
              Business
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => handleCategory(4)}>
              Technology
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => handleCategory(2)}>
              Entertainment
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={12} md={9}>
          <NewsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
