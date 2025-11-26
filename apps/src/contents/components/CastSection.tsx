import React, { FC } from "react";
import { Cast, Crew } from "../Contents.type";
import CastItem from "./CastItem";
import CrewItem from "./CrewItem";

interface CastSectionProps {
  castMembers: Cast[];
  crewMembers: Crew[];
}

const CastSection: FC<CastSectionProps> = ({ castMembers, crewMembers }) => {
  return (
    <section className="detail-credits">
      <h2>출연/제작진</h2>
      <ul className="detail-cast-list">
        {castMembers.map((cast) => (
          <CastItem key={cast.id} cast={cast} />
        ))}
      </ul>
      <ul className="detail-crew-list">
        {crewMembers.map((crew) => (
          <CrewItem key={crew.id} crew={crew} />
        ))}
      </ul>
    </section>
  );
};

export default CastSection;
