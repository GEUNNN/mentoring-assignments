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
      {searchResults.map(
        ({
          id,
          title,
          poster_path,
          release_date,
          vote_average,
        }: MovieListItem) => (
          <ResultItems
            key={id}
            id={id}
            title={title}
            image={poster_path}
            year={release_date}
            voteAverage={vote_average}
          />
        )
      )}
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
