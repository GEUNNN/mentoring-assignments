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
      {searchResults.length > 0 ? (
        searchResults.map((item: MovieListItem) => (
          <ResultItems
            key={item.id}
            title={item.title}
            image={item.poster_path}
          />
        ))
      ) : (
        <p className="no-results-text">
          {keyword.length >= 2
            ? "검색 결과가 없습니다."
            : "검색어를 입력해주세요 (최소 2자 이상)"}
        </p>
      )}
    </section>
  );
};

export default ResultSection;
