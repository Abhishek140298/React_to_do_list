import React, { useState } from "react";
import TaskList from "./TaskList";

const Itemadded = () => {
  const [task, setTask] = useState("");
  const [taskadd, setTaskadd] = useState([]);
  const takeInput = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    setTaskadd((prevValue) => {
      return [...prevValue, task];
    });
    setTask("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the task to be accomplished"
        onChange={takeInput}
        value={task}
      ></input>
      <button onClick={addTask}>+</button>
      {taskadd.map((cval, index) => {
        return <TaskList key={index} tasks={cval} />;
      })}
    </>
  );
};

export default Itemadded;
