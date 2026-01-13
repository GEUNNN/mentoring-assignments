import React, { FC } from "react";
import { Crew } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";
import styles from "../Contents.module.css";

interface CrewItemProps {
  crew: Crew;
}

const CrewItem: FC<CrewItemProps> = ({ crew }) => {
  const { profile_path, name, job } = crew;

  return (
    <li className={styles["detail-crew-item"]}>
      {profile_path && (
        <img
          className={styles["detail-crew-item-image"]}
          loading="lazy"
          src={`${IMG_BASE_URL}${profile_path}`}
          alt={name}
        />
      )}
      <div className={styles["detail-crew-item-info"]}>
        <div className={styles["detail-crew-item-name"]}>{name}</div>
        <div className={styles["detail-crew-item-job"]}>{job}</div>
      </div>
    </li>
  );
};

export default CrewItem;
