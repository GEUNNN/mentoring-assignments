import React from "react";
import ReactDOM from "react-dom/client";
const Main = React.lazy(() => import("./Main/Main"));
const Search = React.lazy(() => import("./search/Search"));
const Contents = React.lazy(() => import("./contents/Contents"));
import { BrowserRouter, Route, Routes } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  const Fallback = ({ resetErrorBoundary }) => (
    <div>
      <p>앗! 페이지를 다시 로딩해주세요. (에러 바운더리)</p>
      <button onClick={() => resetErrorBoundary()}>
        다시 시도 (Try again)
      </button>
    </div>
  );

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={Fallback}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contents/:id" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
