import { useState } from "react";
import Navbar from "./assets/Navbar";
import HomePage from "./assets/HomePage";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
