interface GenreItemProps {
  name: string;
}

const GenreItem = ({ name }: GenreItemProps) => {
  return (
    <div className="genre-item">
      <div>{name}</div>
    </div>
  );
};

export default GenreItem;
