import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";
import "./reactProject.css";

function NavBar() {
  return (
    <Navbar>
      <Container fluid>
        <div className="menu">
          <Nav>
            <NavLink
              className="button"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>

            <NavLink
              className="button"
              exact
              to="/food"
              style={{ textDecoration: "none" }}
            >
              Dessert
            </NavLink>
            <NavLink
              className="button"
              to="/food/new"
              style={{ textDecoration: "none" }}
            >
              Add Dessert
            </NavLink>
          </Nav>
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
export default NavBar;
