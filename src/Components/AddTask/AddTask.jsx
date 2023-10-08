import React from "react";
import Styles from "./styles.module.css";

const AddTask = (props) => {
  const applytask = () => {
    props.submit();
    props.onChange({ target: { value: "" } });
  };

  return (
    <div className={Styles.addTgask}>
      <input
        type="text"
        onChange={props.onChange}
        placeholder="Have a new Task?"
        value={props.inputValue}
      />
      <button onClick={applytask}>Add Task</button>
    </div>
  );
};

export default AddTask;
