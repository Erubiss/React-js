import React, { useState, useEffect } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import DeleteModal from "./deleteModal/deleteModal";
import Styles from "./styles.module.css";
import Button from "react-bootstrap/Button";
import Filter from "./Filter/Filter";
import { toast } from "react-toastify";
import { ContextProvider } from "../App";
import { useContext } from "react";

import {
  createTaskRequest,
  getTaskRequest,
  deleteTaskRequest,
} from "../service/requests";

const ToDo = ({ addNotification }) => {
  const { isDarkMode } = useContext(ContextProvider);
  let [tasks, setTasks] = useState([]);
  let [inputValue, setInputValue] = useState({});
  let [checkedTasks, setCheckedTasks] = useState(new Set());
  let [isOpenAddModal, setIsOpenAddModal] = useState(false);
  let [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  let [editTask, setEditTask] = useState({});
  const inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      delete inputValue[name];
      setInputValue(inputValue);
    } else {
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    }
  };

  const submit = async (editTask) => {
    if (editTask) {
      tasks.forEach((task) => {
        if (task._id === editTask._id) {
          task.title = editTask.title;
          task.description = editTask.description;
        }
      });
      setTasks(tasks);
      setIsOpenAddModal(false);
      setEditTask({});
    } else {
      if (Object.keys(inputValue).length !== 2) return;
      const obj = {};
      Object.keys(inputValue).forEach((name) => {
        obj[name] = inputValue[name];
      });
      if (!obj.title && !obj.description) return;
      const newTask = await createTaskRequest(obj, addNotification);
      if (!newTask) return;
      setInputValue({});
      tasks.push(newTask);
      setTasks(tasks);
      setIsOpenAddModal(false);
    }
  };

  const handleDeleteTask = (_id) => {
    checkedTasks.add(_id);
    setCheckedTasks(checkedTasks);
    setIsOpenDeleteModal(true);
  };

  const handleOnChange = (_id) => {
    if (checkedTasks.has(_id)) {
      checkedTasks.delete(_id);
    } else {
      checkedTasks.add(_id);
    }
    setCheckedTasks(new Set(checkedTasks));
  };
  const handleDeleteAllTasks = () => {
    console.log(checkedTasks, "checkedTasks");
    const arr = Array.from(checkedTasks);
    console.log(arr, "arr");
    tasks = arr.reduce(
      (acc, checkedTask) => acc.filter((task) => task._id !== checkedTask),
      tasks
    );
    deleteTaskRequest(arr);
    setTasks(tasks);
    setCheckedTasks(new Set());
    setIsOpenDeleteModal(false);
  };

  const handleCheckAllTasks = () => {
    if (checkedTasks.size === tasks.length) {
      checkedTasks.clear();
    } else {
      checkedTasks = tasks.map((item) => item._id);
    }
    setCheckedTasks(new Set(checkedTasks));
  };

  const handleOpenModal = (modalName) => {
    if (modalName === "isOpenAddModal") {
      setIsOpenAddModal(true);
    } else {
      setIsOpenDeleteModal(true);
    }
  };
  const onHide = (modalName) => {
    if (modalName === "isOpenAddModal") {
      setIsOpenAddModal(false);
    } else {
      setIsOpenDeleteModal(false);
    }
    setCheckedTasks(new Set());
    setEditTask({});
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setIsOpenAddModal(true);
  };

  const resetEditTask = () => {
    setEditTask({});
  };

  useEffect(() => {
    getTaskRequest(setTasks);
  }, []);

  return (
    <div>
      <div className={Styles.addTask}>
        <Button onClick={() => handleOpenModal("isOpenAddModal")}>
          Add Task
        </Button>
      </div>
      <Filter
        tasks={tasks}
        setTasks={setTasks}
        getTaskRequest={getTaskRequest}
      />
      {isOpenAddModal && (
        <AddTask
          onHide={onHide}
          inputOnChange={inputOnChange}
          submit={submit}
          inputValue={inputValue}
          isOpenAddModal={isOpenAddModal}
          editableTask={editTask}
          resetEditTask={resetEditTask}
        />
      )}
      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        onHide={onHide}
        handleDeleteAllTasks={handleDeleteAllTasks}
        checkedTasks={checkedTasks}
        tasks={tasks}
      />
      <div className={Styles.TasksContainer}>
        {tasks.map((item, index) => {
          return (
            <Task
              tasks={tasks}
              setTasks={setTasks}
              key={index}
              task={item}
              handleDeleteTask={handleDeleteTask}
              handleOnChange={handleOnChange}
              checkedTasks={checkedTasks}
              handleEditTask={handleEditTask}
            />
          );
        })}
        {tasks.length === 0 && <p style={{fontSize:"35px", color:"#0b5ed7"}}> There are not tasks!</p>}
      </div>
      {tasks.length === 0 || (
        <div className={Styles.checkButtons}>
          <button
            className={Styles.deleteAll}
            style={{ color: isDarkMode ? "white" : "black" }}
            onClick={
              checkedTasks.size > 0
                ? () => handleOpenModal("isOpenDeleteModal")
                : () => toast.error("No tasks selected!")
            }
          >
            Delete Cheked tasks
          </button>
          <button
            onClick={handleCheckAllTasks}
            className={Styles.checkAll}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            {checkedTasks.size === tasks.length ? "Uncheck All" : "Check All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
