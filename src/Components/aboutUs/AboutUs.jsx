import { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ContextProvider } from "../../App";
import Styles from "./styles.module.css";
import github from "../../icons/github.svg";
import Erik_Ayvazyan from "../../icons/Erik_Ayvazyan.jpg"
import Liana_Davtyan from "../../icons/Liana_Davtyan.jpg"
const AboutUs = () => {
  const { isDarkMode } = useContext(ContextProvider);

  return (
    <div style={{ height: "100vh" }}>
      <div className={Styles.cvs}>
        <div className={Styles.erikcv}>
          <img src={Erik_Ayvazyan} alt="erik"  style={{height:"100%",}}/>
          <a href="https://github.com/Erubiss" target="blank">
            <img src={github} alt="Erikgit" style={{backgroundColor:"white", borderRadius:"50%", marginBottom:"100%"}} />
          </a>
        </div>
        <div className={Styles.lianacv}>
        <img src={Liana_Davtyan} alt="Liana"  style={{height:"100%",}}/>
          <a href="https://github.com/Lianadavtyan1" target="blank">
            <img src={github} alt="Lianagit" style={{backgroundColor:"white", borderRadius:"50%", marginBottom:"100%"}} />
          </a>
        </div>
        <div className={Styles.button}>
          <Form>
            <Link to="/">
              <Button
                type="button"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                Go Home
              </Button>
            </Link>
          </Form>
        </div>
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

export default AboutUs;
