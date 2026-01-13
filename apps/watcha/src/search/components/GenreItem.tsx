import React from "react";
import styles from "../Search.module.css";
interface GenreItemProps {
  name: string;
}

const GenreItem: React.FC<GenreItemProps> = ({ name }) => {
  return (
    <div className={styles["genre-item"]}>
      <div>{name}</div>
    </div>
  );
};

export default GenreItem;
