import React from "react";
import styles from "../styles/List.module.css";
import Item from "./Item";
import { useTodoState } from "../context/TodoContext";

export default function List() {
  const todos = useTodoState();
  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          contents={todo.contents}
          done={todo.done}
        />
      ))}
    </div>
  );
}
