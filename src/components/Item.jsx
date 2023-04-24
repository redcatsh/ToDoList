import React from "react";
import useListItem from "../hooks/use-listItem";
import styles from "../styles/Item.module.css";

export default function Item() {
  const [loading, error, listItem] = useListItem();

  return (
    <>
      <ul>
        {error && `${error}`}
        {loading && <p>loading...</p>}
        {listItem &&
          listItem.map((item) => (
            <li className={styles.item} key={item.id}>
              <input type="checkbox" id="item" />
              <label htmlFor="item">{item.contents}</label>
            </li>
          ))}
      </ul>
    </>
  );
}
