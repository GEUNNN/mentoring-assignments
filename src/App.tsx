// import "./App.css";

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  console.log("API_URL:", process.env.API_URL);
  console.log("GOOGLE_MAP_API:", process.env.GOOGLE_MAP_API);
  console.log("S3_API:", process.env.S3_API);

  return (
    <div className="app-container">
      <h1>hello</h1>
    </div>
  );
};

export default App;
