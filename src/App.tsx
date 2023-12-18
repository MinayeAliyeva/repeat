import React from "react";
import { useRoute } from "./routes/Routes";
import "./App.css";

function App() {
  const myRoute = useRoute();
  return <div className="App">{myRoute}</div>;
}

export default App;
