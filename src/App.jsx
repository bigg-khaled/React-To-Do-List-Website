import "bootstrap/dist/css/bootstrap.css";
import TaskBar from "./Components/TaskBar";
import List from "./Components/List";
import Item from "./Components/Item";
import { useEffect, useState } from "react";

const App = () => {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

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
      <List toDos={toDos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
    </div>
  );
};

export default App;
