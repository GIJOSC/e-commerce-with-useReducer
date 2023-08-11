import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
//import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Shopping Floripa</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Procurar produto"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              {/* <FaShoppingCart color="white" fontSize="25px"/> */}
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
