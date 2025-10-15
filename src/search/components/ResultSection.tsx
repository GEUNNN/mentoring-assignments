import React from "react";
import { MovieListItem } from "../Search.type";
import ResultItems from "./ResultItems";

interface ResultSectionProps {
  searchResults: MovieListItem[];
  keyword: string;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  searchResults,
  keyword,
}) => {
  return (
    <section className="search-results-container">
      {searchResults?.map(({ id, title, poster_path }: MovieListItem) => (
        <ResultItems key={id} title={title} image={poster_path} />
      ))}
      {searchResults.length === 0 || keyword.length < 2 ? (
        <p className="no-results-text">
          {keyword.length < 2
            ? "검색어를 입력해주세요 (최소 2자 이상)"
            : "검색 결과가 없습니다."}
        </p>
      ) : null}
    </section>
  );
};

export default ResultSection;
