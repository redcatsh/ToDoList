import React, { useState } from "react";
import styles from "../styles/Item.module.css";
import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../context/TodoContext";

const ListItem = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  ${(props) =>
    props.done &&
    css`
      label {
        text-decoration: line-through;
        color: #222;
      }
    `}
`;

export default function Item({ id, contents, done }) {
  const [isChecked, setIsChecked] = useState(done);
  const dispatch = useTodoDispatch();
  const handleToggle = () => {
    dispatch({ type: "TOGGLE", id });
    setIsChecked((prev) => !prev);
  };
  const handleDelete = () => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <>
      <ListItem className={styles.item} done={done}>
        <div>
          <input
            type="checkbox"
            id={id}
            onChange={handleToggle}
            checked={isChecked}
          />
          <label htmlFor={id}>{contents}</label>
        </div>

        <div>
          <FaTrashAlt onClick={handleDelete} />
        </div>
      </ListItem>
    </>
  );
}
