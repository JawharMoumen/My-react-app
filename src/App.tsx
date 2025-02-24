import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import "./styles.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <button onClick={increment}>Count: {count}</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
