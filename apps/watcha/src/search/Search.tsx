import React, { Suspense, useDeferredValue, useState } from "react";
import Header from "../components/Header";
import "./Search.css";
import ResultSection from "./components/ResultSection";
import GenreSection from "./components/GenreSection";
import { useQueryGetGenreList, useQueryGetSearchList } from "../query/query";

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);

  const { data: searchList } = useQueryGetSearchList(deferredKeyword);
  const { data: genreList } = useQueryGetGenreList();

  return (
    <div className="app-container">
      <Header isSearchPage={true} setKeyword={setKeyword} />
      <Suspense fallback={<div>Loading search results...</div>}>
        <ResultSection
          searchResults={searchList?.results || []}
          keyword={keyword}
        />
      </Suspense>
      {!searchList?.results.length && (
        <GenreSection genres={genreList?.genres || []} />
      )}
    </div>
  );
};

export default Search;
