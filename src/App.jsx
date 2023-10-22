import React from "react";
import ToDo from "./Components/ToDo";

class App extends React.Component {
  render() {
    const containerStyles = { width: "90%", margin: "auto" };
    return (
      <div style={containerStyles}>
        <ToDo/>
      </div>
    );
  }
}

export default App;
