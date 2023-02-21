import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Info />
      <Projects />
    </div>
  );
}

export default App;
