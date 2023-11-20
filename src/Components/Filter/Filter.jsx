import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Styles from "../Filter/styles.module.css";
import { toast } from "react-toastify";

const Filter = ({ tasks, setTasks, getTaskRequest }) => {
  const [searchData, setSearchData] = useState("");
  const filterByTitle = () => {
    const filteredTasks = tasks.filter((task) => task.title === searchData);
    if (!searchData || filteredTasks.length === 0) {
      toast.error("Can't search or see results");
    } else {
      setTasks(filteredTasks);
      setSearchData("")
    }
  };
  const reset=()=>{
    getTaskRequest(setTasks)
    setSearchData("")
  }
  return (
    <div className={Styles.search}>
      <Form.Control
        placeholder="Search ..."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <Button onClick={filterByTitle}>Search</Button>
      <Button onClick={reset }>Reset</Button>
    </div>
  );
};

export default Filter;
