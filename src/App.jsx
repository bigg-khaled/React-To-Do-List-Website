import "bootstrap/dist/css/bootstrap.css";
import TaskBar from "./Components/TaskBar";
import List from "./Components/List";
import { useState } from "react";

const App = () => {
  const [toDos, setToDos] = useState([]);

  function addToDo(title) {
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div class="container mt-4">
      <TaskBar onSubmit={addToDo} />
      <h1 class="my-4">Task List</h1>
      <ul class="list-group">
        {toDos.length === 0 && "No To Dos"}
        {toDos.map((todo) => {
          return (
            <li key={todo.id} class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              <label class="form-check-label" for="firstCheckbox">
                {todo.title}
              </label>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => deleteToDo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
