import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

class ToDo extends React.Component {
  state = {
    tasks: [
      { name: "Task1", id: 1 },
      { name: "Task2", id: 2 },
      { name: "Task3", id: 3 },
    ],
    inputValue: "",
    newId: 4,
  };
  delete = (e) => {
    this.state.tasks = this.state.tasks.filter((item) => {
      return !(item.id == e.target.getAttribute("index"));
    });
    this.forceUpdate();
  };
  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };
  submit = () => {
    if (this.state.inputValue !== "") {
      const newTask = {
        name: this.state.inputValue,
        id: this.state.newId,
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        inputValue: "",
        newId: prevState.newId + 1,
      }));
    }
  };
  render() {
    return (
      <div>
        <h2>Need something To Do?</h2>
        <AddTask
          onChange={this.onChange}
          submit={this.submit}
          inputValue={this.state.inputValue}
        />
        <div>
          {this.state.tasks.map((item) => {
            return <Task delFunc={this.delete} task={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default ToDo;
