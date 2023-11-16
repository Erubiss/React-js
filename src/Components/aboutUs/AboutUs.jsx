import { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ContextProvider } from "../../App";
import Styles from "./styles.module.css"

const AboutUs = () => {
  const { isDarkMode } = useContext(ContextProvider);

  return (
    <div className={Styles.aboutus}>
      <Form>
        <Link to="/">
          <Button style={{ color: isDarkMode ? "white" : "black" }}>
            Go Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AboutUs;
