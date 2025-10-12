import React from "react";

interface GenreItemProps {
  name: string;
}

const GenreItem: React.FC<GenreItemProps> = ({ name }) => {
  return (
    <div className="genre-item">
      <div>{name}</div>
    </div>
  );
};

export default GenreItem;
