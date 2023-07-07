import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const TaskBar = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <>
      <h3 className="mb-3">New Task</h3>
      <form onSubmit={handleSubmit} className="form-floating mb-3 w-75">
        <input
          type="text"
          className="form-control"
          id="item"
          placeholder="Task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <label htmlFor="floatingInput">Task</label>
        <button type="submit" className="btn btn-outline-success mt-3">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TaskBar;
