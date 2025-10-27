import React, { FC } from "react";
import { Cast } from "../Contents.type";
import { IMG_BASE_URL } from "../../apis/config";

interface CastItemProps {
  cast: Cast;
}

const CastItem: FC<CastItemProps> = ({ cast }) => {
  const { profile_path, name, character } = cast;

  return (
    <li className="detail-cast-item">
      <img
        className="detail-cast-item-image"
        loading="lazy"
        src={`${IMG_BASE_URL}${profile_path}`}
        alt={name}
      />
      <div className="detail-cast-item-info">
        <div className="detail-cast-item-name">{name}</div>
        <div className="detail-cast-item-character">{character}</div>
      </div>
    </li>
  );
};

export default CastItem;
