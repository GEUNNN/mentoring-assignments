import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main/Main";
import Search from "./search/Search";
import Contents from "./contents/Contents";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contents/:id" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
