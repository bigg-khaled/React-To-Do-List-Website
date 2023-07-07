import React from "react";

const Item = ({ completed, id, title, toggleTodo, deleteToDo }) => {
  return (
    <li class="list-group-item">
      <input
        class="form-check-input me-1"
        type="checkbox"
        value=""
        id="firstCheckbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label class="form-check-label" for="firstCheckbox">
        {title}
      </label>
      <button
        type="button"
        class="btn btn-outline-danger"
        onClick={() => deleteToDo(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
