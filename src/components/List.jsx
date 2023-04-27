import React, { useState } from "react";
import styles from "../styles/List.module.css";
import Item from "./Item";
import { useTodoState } from "../context/TodoContext";

export default function List({ filter }) {
  const todos = useTodoState();

  const filtered = getFilteredItems(todos, filter);

  return (
    <div className={styles.wrapper}>
      {filtered.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          contents={todo.contents}
          done={todo.done}
          status={todo.status}
        />
      ))}
    </div>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  } else {
    console.log(filter);
    console.log(todos.filter((todo) => todo.status === filter));
    return todos.filter((todo) => todo.status === filter);
  }
}
