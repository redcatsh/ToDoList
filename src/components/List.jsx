import React from "react";
import styles from "../styles/List.module.css";
import Item from "./Item";

export default function List() {
  return (
    <div className={styles.wrapper}>
      <Item />
    </div>
  );
}
