import { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ContextProvider } from "../../App";
import Styles from "./styles.module.css"

const ContactUs = () => {
  const { isDarkMode } = useContext(ContextProvider);

  return (
    <div className={Styles.contactus}>
      <Form className={Styles.form}>
        <Form.Control type="text" placeholder="Name" />
        <Form.Control type="text" placeholder="E-mail" />
        <Form.Control type="text" placeholder="Phone Number" />
        <Form.Control type="text" placeholder="Message" />

        <Link to="/">
          <Button style={{ color: isDarkMode ? "white" : "black" }}>
            Go Home
          </Button>
        </Link>
          <Button style={{ color: isDarkMode ? "white" : "black" }}>
            Send Message
          </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
