import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Search from "./search/Search";
import Contents from "./contents/Contents";
import { BrowserRouter, Route, Routes } from "react-router";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
      <Route path="/contents/:id" element={<Contents />} />
    </Routes>
  </BrowserRouter>
);
