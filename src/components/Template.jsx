import React from "react";
import styles from "../styles/Template.module.css";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/TodoContext";

const Wrapper = styled.div`
  ${(props) =>
    props.darkMode &&
    css`
      background-color: #637299;
      transition: all 0.3s;
    `}
`;
export default function Template({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <Wrapper className={styles.template} darkMode={darkMode}>
      {children}
    </Wrapper>
  );
}
