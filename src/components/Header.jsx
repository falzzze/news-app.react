import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import { AppContext } from "../App";

const Header = () => {
  const { handleCategory, handleSearch } = useContext(AppContext);
  const location = useLocation();

  return (
    <>
      <Navbar
        className="mb-4 navbar navbar-dark bg-dark"
        bg="dark"
        expand="lg light"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="text-light fs-4 me-5">
            News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategory("world")}>
                    World
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("business")}>
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("technology")}>
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategory("entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            {!location.pathname?.includes("/news") && ( // скрываем строку поиска при отображении одиночной страницы
              <Form className="d-flex" onSubmit={handleSearch}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  name="search"
                />
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
