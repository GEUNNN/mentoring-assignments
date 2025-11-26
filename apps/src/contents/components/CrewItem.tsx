import React, { FC } from "react";
import { Crew } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";

interface CrewItemProps {
  crew: Crew;
}

const CrewItem: FC<CrewItemProps> = ({ crew }) => {
  const { profile_path, name, job } = crew;

  return (
    <li className="detail-crew-item">
      {profile_path && (
        <img
          className="detail-crew-item-image"
          loading="lazy"
          src={`${IMG_BASE_URL}${profile_path}`}
          alt={name}
        />
      )}
      <div className="detail-crew-item-info">
        <div className="detail-crew-item-name">{name}</div>
        <div className="detail-crew-item-job">{job}</div>
      </div>
    </li>
  );
};

export default CrewItem;
