import React from "react";
// import "./App.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  console.log("API URL:", process.env.API_URL);

  return (
    <div className="app-container">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
