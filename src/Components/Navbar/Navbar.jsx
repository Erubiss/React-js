import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import darkmode from "../../icons/darkmode.svg";
import lightmode from "../../icons/lightmode.svg";

const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const logo = isDarkMode ? darkmode : lightmode;

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt={isDarkMode ? "darkmode" : "lightmode"}
            width="35px"
            height="35px"
            onClick={toggleMode}
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>

        <Link to="/">
          <Navbar.Brand>ToDo</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/contact">
            <Navbar.Brand>Contact Us</Navbar.Brand>
          </Link>
          <Link>
            <Navbar.Brand>About Us</Navbar.Brand>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
