import React, { useState } from "react";
import styles from "../styles/Create.module.css";
import { useTodoDispatch, useTodoNextId } from "../context/TodoContext";

export default function Create() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        contents: value,
        done: false,
      },
    });
    setValue("");
    nextId.current++;
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add ToDo Item"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
