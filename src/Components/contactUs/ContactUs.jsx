import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ContextProvider } from "../../App";
import Styles from "./styles.module.css";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { isDarkMode } = useContext(ContextProvider);

  const [form, setForm] = useState({
    name: "",
    mail: "",
    number: "",
    message: "",
  });

  const formChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!form.name || !form.mail || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully");
    setForm({
      name: "",
      mail: "",
      number: "",
      message: "",
    });
  };

  return (
    <div>
      <h3>Have a Problem? Please let us know ) </h3>
      <div className={Styles.contactus}>
        <Form className={Styles.form} onSubmit={sendMessage}>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={formChange}
          />
          <Form.Control
            type="text"
            placeholder="E-mail"
            name="mail"
            value={form.mail}
            onChange={formChange}
          />
          <Form.Control
            type="text"
            placeholder="Phone Number (Not required)"
            name="number"
            value={form.number}
            onChange={formChange}
          />
          <Form.Control
            as="textarea"
            rows="5"
            type="text"
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={formChange}
          />

          <Link to="/">
            <Button style={{ color: isDarkMode ? "white" : "black" }}>
              Go Home
            </Button>
          </Link>
          <Button
            style={{ color: isDarkMode ? "white" : "black" }}
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: "whitesmoke",
        }}
      >
        Created by Erik Ayvazyan & Liana Davtyan ©
      </footer>
    </div>
  );
};

export default ContactUs;
