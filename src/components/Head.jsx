import React from "react";
import styles from "../styles/Head.module.css";
import { MdSunny } from "react-icons/md";

export default function Head() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div>
          <MdSunny />
        </div>
        <h5 className={styles.date}>2023.04.25</h5>
      </div>
      <div className={styles.bottom}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
