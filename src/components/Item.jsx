import React from "react";
import useListItem from "../hooks/use-listItem";
import styles from "../styles/Item.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Item() {
  const [loading, error, listItem] = useListItem();

  return (
    <>
      {error && `${error}`}
      {loading && <p>loading...</p>}
      {listItem &&
        listItem.map((item) => (
          <div className={styles.item} key={item.id}>
            <div>
              <input type="checkbox" id="item" />
              <label htmlFor="item">{item.contents}</label>
            </div>

            <div>
              <FaTrashAlt />
            </div>
          </div>
        ))}
    </>
  );
}
