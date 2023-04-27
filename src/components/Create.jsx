import React, { useState } from "react";
import styles from "../styles/Create.module.css";
import { useTodoDispatch, useTodoNextId } from "../context/TodoContext";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/TodoContext";

const Button = styled.button`
  ${(props) =>
    props.darkMode &&
    css`
      background-color: #e6acc1 !important;
      transition: all 0.3s;
    `}
`;
export default function Create() {
  const { darkMode } = useDarkMode();
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
        status: "active",
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
        <Button type="submit" darkMode={darkMode}>
          ADD
        </Button>
      </form>
    </div>
  );
}
