import React, { useDeferredValue, useState } from "react";
import Header from "../components/Header";
import "./Search.css";
import ResultSection from "./components/ResultSection";
import GenreSection from "./components/GenreSection";
import { useQueryGetGenreList, useQueryGetSearchList } from "../apis/query";

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);

  const { data: searchList } = useQueryGetSearchList(deferredKeyword);
  const { data: genreList } = useQueryGetGenreList();

  return (
    <div className="app-container">
      <Header isSearchPage={true} setKeyword={setKeyword} />
      <ResultSection
        searchResults={searchList?.results || []}
        keyword={keyword}
      />
      <GenreSection genres={genreList?.genres || []} />
    </div>
  );
};

export default Search;
