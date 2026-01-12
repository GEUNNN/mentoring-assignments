import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { reset } = useQueryErrorResetBoundary();

  const Fallback = ({
    resetErrorBoundary,
  }: {
    resetErrorBoundary: () => void;
  }) => (
    <div>
      <p>앗! 페이지를 다시 로딩해주세요. (에러 바운더리)</p>
      <button onClick={() => resetErrorBoundary()}>
        다시 시도 (Try again)
      </button>
    </div>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary onReset={reset} FallbackComponent={Fallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
