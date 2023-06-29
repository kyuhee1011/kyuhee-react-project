import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";

import "./NavBar.css";

function NavBar({ searchSubmit, setSearchSubmit }) {
  return (
    <Navbar>
      <Container fluid>
        <Nav>
          <NavLink
            className="button"
            exact
            to="/"
            style={{ textDecoration: "none", width: "4rem", margin: "1%" }}
          >
            Home
          </NavLink>

          <NavLink
            className="button"
            exact
            to="/desserts"
            style={{ textDecoration: "none", width: "5rem", margin: "1%" }}
          >
            Dessert
          </NavLink>
          <NavLink
            className="button"
            exact
            to="/new"
            style={{ textDecoration: "none", width: "8rem", margin: "1%" }}
          >
            My Dessert
          </NavLink>
          <NavLink
            className="button"
            exact
            to="/addForm"
            style={{ textDecoration: "none", width: "8rem", margin: "1%" }}
          >
            Add Dessert
          </NavLink>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            name="name"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchSubmit(e.target.value)}
            value={searchSubmit}
          />
          <Button type="submit" variant="outline-primary">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
export default NavBar;
