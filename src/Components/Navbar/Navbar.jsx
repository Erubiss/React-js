import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import darkmode from "../../icons/darkmode.svg";
import lightmode from "../../icons/lightmode.svg";
import "../../index.css";

const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const logo = isDarkMode ? darkmode : lightmode;

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  document.documentElement.style.setProperty(
    "--body_background",
    isDarkMode ? "#2a3035" : "#fcefef"
  );
  document.documentElement.style.setProperty(
    "--task_background",
    isDarkMode ? "#1282a2" : "#e2711d"
  );
  document.documentElement.style.setProperty(
    "--task_border",
    isDarkMode ? "#034078" : "#cc5803"
  );

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px",
        }}
      >
        <Navbar.Brand clas>
          <img
            src={logo}
            alt={isDarkMode ? "darkmode" : "lightmode"}
            width="35px"
            height="35px"
            onClick={toggleMode}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out", 
              transform: isDarkMode ? "rotate(0deg)" : "rotate(180deg)", 
            }}
          />
        </Navbar.Brand>
        <Link to="/">
          <Navbar.Brand style={{ fontSize: "50px" }}>ToDo</Navbar.Brand>
        </Link>
        <Nav>
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
