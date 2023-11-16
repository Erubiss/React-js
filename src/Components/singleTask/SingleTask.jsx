import Styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ContextProvider } from "../../App";
import { useContext } from "react";

const SingleTask = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { state } = useLocation();
  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "#2a3035" : "#EDEDF4",
      }}
    >
      <div
        className={Styles.container}
        style={{
          background: isDarkMode ? "#271c4d" : "#1abfee",
          color: isDarkMode ? "white" : "black",
          border: isDarkMode ? "2px #0D5C63 ridge" : "2px #034078 ridge",
        }}
      >
        <p>Title: {state.title}</p>
        <p>Description: {state.description} </p>
        <p>Date: {state.created_at.split("T", 1)[0]}</p>
        <p>Status: {state.status}</p>
        <Link to="/">
          <Button style={{ color: isDarkMode ? "white" : "black" }}>
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTask;
