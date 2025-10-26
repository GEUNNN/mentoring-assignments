import React, { FC } from "react";
import { IMG_BASE_URL } from "../../apis/config";
import { Cast, Crew } from "../Contents.type";

interface CastSectionProps {
  castMembers: Cast[];
  crewMembers: Crew[];
}

const CastSection: FC<CastSectionProps> = ({ castMembers, crewMembers }) => {
  return (
    <section className="detail-credits">
      <h2>출연/제작진</h2>
      <ul className="detail-cast-list">
        {castMembers?.map((cast, idx) => (
          <li className="detail-cast-item" key={idx}>
            <img
              className="detail-cast-item-image"
              loading="lazy"
              src={`${IMG_BASE_URL}${cast.profile_path}`}
              alt={cast.name}
            />
            <div className="detail-cast-item-info">
              <div className="detail-cast-item-name">{cast.name}</div>
              <div className="detail-cast-item-character">{cast.character}</div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="detail-crew-list">
        {crewMembers?.map((crew, idx) => (
          <li className="detail-crew-item" key={idx}>
            {crew.profile_path && (
              <img
                className="detail-crew-item-image"
                loading="lazy"
                src={`${IMG_BASE_URL}${crew.profile_path}`}
                alt={crew.name}
              />
            )}
            <div className="detail-crew-item-info">
              <div className="detail-crew-item-name">{crew.name}</div>
              <div className="detail-crew-item-job">{crew.job}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CastSection;
