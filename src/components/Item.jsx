import React, { useState } from "react";
import styles from "../styles/Item.module.css";
import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../context/TodoContext";
import { useDarkMode } from "../context/TodoContext";

const ListItem = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  ${(props) =>
    props.done === true &&
    css`
      label,
      svg {
        text-decoration: line-through;
        color: #22222287 !important;
      }
    `}
  ${(props) =>
    props.darkmode &&
    css`
      label,
      svg {
        color: #f2f2f2;
        font-weight: 300;
      }
    `} 
     ${(props) =>
    props.done === true &&
    props.darkmode &&
    css`
      label,
      svg {
        text-decoration: line-through;
        color: #f2f2f28a !important;
      }
    `}
`;

export default function Item({ id, contents, done, status }) {
  const [isChecked, setIsChecked] = useState(done);
  const dispatch = useTodoDispatch();
  const { darkmode } = useDarkMode();
  const handleToggle = (e) => {
    dispatch({ type: "TOGGLE", id });
    setIsChecked((prev) => !prev);
  };
  const handleDelete = () => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <>
      <ListItem
        className={styles.item}
        done={done}
        darkmode={darkmode}
        status={status}
      >
        <div>
          <input
            type="checkbox"
            id={id}
            onChange={handleToggle}
            checked={isChecked}
          />
          <label htmlFor={id}>{contents}</label>
        </div>

        <div className={styles.delete}>
          <FaTrashAlt onClick={handleDelete} />
        </div>
      </ListItem>
    </>
  );
}
