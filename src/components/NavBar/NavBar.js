import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";

import "./NavBar.css";

function NavBar({ searchSubmit, setSearchSubmit }) {
  return (
    <Navbar>
      <Container fluid>
        <div className="menu">
          <Nav>
            <NavLink
              className="button"
              exact
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>

            <NavLink
              className="button"
              exact
              to="/desserts"
              style={{ textDecoration: "none" }}
            >
              Dessert
            </NavLink>
            <NavLink
              className="button"
              exact
              to="/new"
              style={{ textDecoration: "none" }}
            >
              My Dessert
            </NavLink>
            <NavLink
              className="button"
              exact
              to="/addForm"
              style={{ textDecoration: "none" }}
            >
              Add Dessert
            </NavLink>
          </Nav>
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            name="name"
            placeholder="Search"
            className="me-2 searchBar"
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
