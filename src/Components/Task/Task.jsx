import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../../index.css";
import { ContextProvider } from "../../App";
import { useContext } from "react";

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
    setTasks,
    tasks,
  } = props;
  const { isDarkMode } = useContext(ContextProvider);
  const dark = () => {
    const isChecked = checkedTasks.has(task._id);
  
    if (isChecked && isDarkMode) {
      return "#3a2973";
    } else if (isChecked && !isDarkMode) {
      return "#1282a2";
    } else if (isDarkMode && !isChecked) {
      return "#271c4d";
    } else if (!isDarkMode && !isChecked) {
      return "#1abfee";
    }
  };
  return (
    <div
      className={Styles.task}
      style={{
        background: dark(),
        color: isDarkMode ? "white" : "black",
        border: isDarkMode ? "2px #0D5C63 ridge" : "2px #034078 ridge",
      }}
    >
      <div>
        <Form>
          <Form.Check
            type="checkbox"
            onChange={() => handleOnChange(task._id)}
            checked={checkedTasks.has(task._id)}
            style={{ margin: "8px" }}
          />
        </Form>
        <Link
          to={`/singleTask/${task._id}`}
          state={task}
          style={{ color: isDarkMode ? "white" : "black" }}
        >
          <p>Title: {task.title}</p>
        </Link>
        <p>
          Description:{" "}
          {task.description.length > 10
            ? task.description.slice(0, 9) + "..."
            : task.description}
        </p>
        <p>Date: {task.created_at.split("T", 1)[0]}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <Form>
        <Form.Check
          className={isDarkMode ? Styles.formDark : Styles.formLight}
          checked={task.status === "done"}
          type="switch"
          id="custom-switch"
          style={{ marginLeft: "30%" }}
          label={task.status === "done" ? "Done" : "Active"}
          onChange={async (e) => {
            const response = await fetch(
              `http://localhost:3001/task/${task._id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  status: e.target.checked ? "done" : "active",
                }),
              }
            );
            const data = await response.json();
            const newTasks = tasks.map((item) => {
              if (item._id === task._id) {
                return { ...item, status: data.status };
              }
              return item;
            });
            setTasks(newTasks);
            console.log(newTasks);
          }}
        />
      </Form>
    </div>
  );
};

export default Task;
