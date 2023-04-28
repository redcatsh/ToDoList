import React, { useState } from "react";
import styles from "../styles/Head.module.css";
import { useDarkMode } from "../context/TodoContext";
import styled, { css } from "styled-components";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { getDate } from "../utils/date";

const Filter = styled.div`
  & > ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const ModeIcon = styled.div`
  ${(props) =>
    props.darkmode &&
    css`
      svg {
        color: #e49b5a;
        font-weight: 300;
      }
    `}
`;

const Date = styled.h5`
  ${(props) =>
    props.darkmode &&
    css`
      color: #e49b5a;
      transition: all 0.3s;
    `}
`;

export default function Head({ filters, filter, onFilterChange }) {
  const { darkmode, toggleDarkMode } = useDarkMode();
  const [isToggled] = useState(true);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <ModeIcon
            className={styles.mode}
            onClick={toggleDarkMode}
            darkmode={darkmode}
          >
            {darkmode ? (
              <Expand duration={750} toggled={isToggled} />
            ) : (
              <Expand duration={750} />
            )}
          </ModeIcon>
          <Date className={styles.date} darkmode={darkmode}>
            {getDate()}
          </Date>
        </div>
        <Filter className={styles.bottom}>
          <ul>
            {filters.map((value, index) => (
              <li key={index}>
                <button
                  className={`${styles.filter} ${
                    filter === value && styles.selected
                  }`}
                  onClick={() => onFilterChange(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </Filter>
      </div>
    </>
  );
}
