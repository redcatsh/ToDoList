import React from "react";
import styles from "../styles/Head.module.css";
import { MdSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/TodoContext";
import styled, { css } from "styled-components";

export default function Head() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const Header = styled.div`
    display: block;
  `;

  const Filter = styled.div`
    ${(props) =>
      props.darkMode &&
      css`
        background-color: #c3cce6;
      `}
  `;
  return (
    <Header className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.mode} onClick={toggleDarkMode}>
          {darkMode ? <BsFillMoonFill /> : <MdSunny />}
        </div>
        <h5 className={styles.date}>2023.04.25</h5>
      </div>
      <Filter className={styles.bottom} darkMode={darkMode}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </Filter>
    </Header>
  );
}
