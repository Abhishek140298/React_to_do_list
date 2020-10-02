import React from "react";

const TaskList = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        <li>{props.tasks}</li>
      </ul>
    </>
  );
};

export default TaskList;
