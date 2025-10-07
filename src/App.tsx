import { Link } from "react-router";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <h1>hello</h1>
      <Link to="/search">Go to Search</Link>
    </div>
  );
};

export default App;
