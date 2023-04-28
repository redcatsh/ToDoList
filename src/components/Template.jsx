import React from "react";
import styles from "../styles/Template.module.css";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/TodoContext";

const Wrapper = styled.div`
  /* ${(props) =>
    props.darkmode &&
    css`
      background-color: #4b5878;
      transition: all 0.3s;
    `} */
`;
export default function Template({ children }) {
  const { darkmode } = useDarkMode();

  return (
    <Wrapper className={styles.template} darkmode={darkmode}>
      {children}
    </Wrapper>
  );
}
