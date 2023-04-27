import React from "react";
import styles from "../styles/Head.module.css";
// import { MdSunny } from "react-icons/md";
// import { BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/TodoContext";
import styled, { css } from "styled-components";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

const Filter = styled.div`
  ${(props) =>
    props.darkMode &&
    css`
      background-color: #e6acc1;
      transition: all 0.3s;
    `}
`;

const ModeIcon = styled(Expand)`
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export default function Head() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.mode} onClick={toggleDarkMode}>
          {/* {darkMode ? <BsFillMoonFill /> : <MdSunny />} */}
          <ModeIcon duration={750} />
        </div>
        <h5 className={styles.date}>2023.04.25</h5>
      </div>
      <Filter className={styles.bottom} darkMode={darkMode}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </Filter>
    </div>
  );
}
