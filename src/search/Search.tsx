import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Search.css";
import { getApiOptions } from "../apis/config";
import ResultSection from "./components/ResultSection";
import GenreSection from "./components/GenreSection";
import { MovieListItem } from "./Search.type";

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState<MovieListItem[]>([]);

  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = getApiOptions();

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setGenres(json.genres))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!keyword.trim() || keyword.length < 2) {
      setSearchResults([]);
      return;
    }

    const debounceTimer = setTimeout(() => {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${keyword}`;

      fetch(searchUrl, options)
        .then((res) => res.json())
        .then((json) => {
          setSearchResults(json.results || []);
        })
        .catch((err) => {
          console.error(err);
          setSearchResults([]);
        });
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [keyword]);

  console.log("searchResults >>>", searchResults);

  return (
    <div className="app-container">
      <Header isSearchPage={true} setKeyword={setKeyword} />
      <ResultSection searchResults={searchResults} keyword={keyword} />
      <GenreSection genres={genres} />
    </div>
  );
};

export default Search;
