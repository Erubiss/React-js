import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Styles from "../Filter/styles.module.css"

const Filter = ({ tasks, setTasks, getTaskRequest }) => {
  const [searchData, setSearchData] = useState();
  const filterByTitle = () => {
    console.log(searchData, "searchData");
    const filteredTasks = tasks.filter((task) => task.title === searchData);
    console.log(filteredTasks, "filteredTasks");
    setTasks(filteredTasks);
  };
  return (
    <div className={Styles.search}>
      <Form.Control
        placeholder="Search ..."
        onChange={(e) => setSearchData(e.target.value)}
      />
      <Button onClick={filterByTitle}>
        Search
      </Button>
      <Button onClick={() => getTaskRequest(setTasks)}>Reset</Button>

    </div>
  );
};

export default Filter;
