import React from "react";
import "./TaskList.css";

const TaskList = (props) => {
  console.log(props);
  return (
    <div className="task_list">
      <ul>
        <li>{props.tasks}</li>
        <button
          className="delete"
          onClick={() => {
            props.onDecrement(props.id);
          }}
        >
          -
        </button>
      </ul>
    </div>
  );
};

export default TaskList;
