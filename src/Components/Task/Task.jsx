import Styles from "./styles.module.css";

const Task = (props) => {
  return (
    <div className={Styles.task}>
      <div>
          <p>{props.task.name} </p>
        </div>
          <button index={props.task.id} onClick={props.delFunc}>
            Delete
          </button>
    </div>
  );
};
export default Task;
