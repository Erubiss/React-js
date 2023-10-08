import ToDo from "./Components/Todo";
import React from "react";
import Styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={Styles.App}>
        <h1>Hi</h1>
        <ToDo />
      </div>
    );
  }
}
export default App;
