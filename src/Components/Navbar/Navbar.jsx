import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import darkmode from "../../icons/darkmode.svg";
import lightmode from "../../icons/lightmode.svg";
import search from "../../icons/search.svg";
import "../../index.css";
import Styles from "./styles.module.css";

const NavbarComponent = ({ setIsDarkMode, isDarkMode }) => {
  const logo = isDarkMode ? darkmode : lightmode;

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Navbar
      style={{ position: "sticky", top: "0" }}
      className={Styles.navbar}
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
        <Navbar.Brand>
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
        <div className={Styles.navLink}>
          <Link to="/">
            <Navbar.Brand style={{ fontSize: "50px" }}>ToDo</Navbar.Brand>
          </Link>
          <Nav>
            <Link to="/contact">
              <Navbar.Brand>Contact Us</Navbar.Brand>
            </Link>
            <Link to="/about">
              <Navbar.Brand>About Us</Navbar.Brand>
            </Link>
            <img
              src={search}
              alt="search"
              style={{ width: "45px", height: "45px", cursor: "pointer" }}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            />
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
