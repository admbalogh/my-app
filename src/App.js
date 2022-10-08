import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather city={"London"} />
        <p>
          Click on to see the{" "}
          <a
            href="https://github.com/admbalogh/my-app"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
