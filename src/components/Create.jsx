import React from "react";
import styles from "../styles/Create.module.css";

export default function Create() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Add ToDo Item" />
      <button>Add</button>
    </div>
  );
}
