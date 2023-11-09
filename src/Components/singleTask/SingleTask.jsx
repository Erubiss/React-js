import Styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SingleTask = () => {
  const { state } = useLocation();
  const location = useLocation();
  console.log(location, "location");
  return (
    <div style={{ marginTop: "10%" }} className={Styles.container}>
      <p>Title: {state.title}</p>
      <p>Description: {state.description} </p>
      <p>Date: {state.created_at.split("T", 1)[0]}</p>
      <p>Status: {state.status}</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default SingleTask;
