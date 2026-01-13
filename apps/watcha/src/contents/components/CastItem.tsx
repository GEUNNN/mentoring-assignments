import React, { FC } from "react";
import { Cast } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";
import styles from "../Contents.module.css";

interface CastItemProps {
  cast: Cast;
}

const CastItem: FC<CastItemProps> = ({ cast }) => {
  const { profile_path, name, character } = cast;

  return (
    <li className={styles["detail-cast-item"]}>
      <img
        className={styles["detail-cast-item-image"]}
        loading="lazy"
        src={`${IMG_BASE_URL}${profile_path}`}
        alt={name}
      />
      <div className={styles["detail-cast-item-info"]}>
        <div className={styles["detail-cast-item-name"]}>{name}</div>
        <div className={styles["detail-cast-item-character"]}>{character}</div>
      </div>
    </li>
  );
};

export default CastItem;
