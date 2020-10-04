import React, { useState } from "react";
import TaskList from "./TaskList";
import "./Itemadded.css";

const Itemadded = () => {
  const [task, setTask] = useState("");
  const [taskadd, setTaskadd] = useState([]);
  const takeInput = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    if (task === "") {
      return alert("please enter task");
    } else {
      setTaskadd((prevValue) => {
        return [...prevValue, task];
      });
      setTask("");
    }
  };
  const onDelete = (id) => {
    setTaskadd((prevArr) => {
      return prevArr.filter((cval, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <span className="heading">
        <h1>Your To Do list</h1>
      </span>
      <div className="input">
        <input
          type="text"
          placeholder="Enter the task "
          onChange={takeInput}
          value={task}
        ></input>
        <button className="button_add" onClick={addTask}>
          +
        </button>
      </div>
      <h5>Your List</h5>
      {taskadd.map((cval, index) => {
        return (
          <TaskList
            key={index}
            id={index}
            tasks={cval}
            onDecrement={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Itemadded;
