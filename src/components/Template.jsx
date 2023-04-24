import React from "react";
import styles from "../styles/template.module.css";

export default function Template({ children }) {
  return <div className={styles.template}>{children}</div>;
}
