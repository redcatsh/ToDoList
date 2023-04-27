import React from "react";
import styles from "../styles/Template.module.css";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/TodoContext";

export default function Template({ children }) {
  const Template = styled.div`
    ${(props) =>
      props.darkMode &&
      css`
        background-color: #637299;
      `}
  `;

  const { darkMode } = useDarkMode();

  return (
    <Template className={styles.template} darkMode={darkMode}>
      {children}
    </Template>
  );
}
