import React from "react";

const List = () => {
  return (
    <>
      <h1 class="my-4">Task Lists</h1>
      <ul class="list-group">
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
          <label class="form-check-label" for="firstCheckbox">
            First checkbox
          </label>
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default List;
