import React from "react";
import Item from "./Item";

const List = ({ toDos, toggleTodo, deleteToDo }) => {
  return (
    <>
      <ul class="list-group">
        {toDos.length === 0 && "No To Dos"}
        {toDos.map((todo) => {
          return (
            <Item
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteToDo={deleteToDo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default List;
