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
        {castMembers?.map((cast, idx) => (
          <CastItem key={idx} cast={cast} />
        ))}
      </ul>
      <ul className="detail-crew-list">
        {crewMembers?.map((crew, idx) => (
          <CrewItem key={idx} crew={crew} />
        ))}
      </ul>
    </section>
  );
};

export default CastSection;
