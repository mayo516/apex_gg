import "./App.css";
import MyHeader from "./MyHeader.js";
import MyFooter from "./MyFooter";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MyHeader />
      <header className="App-header">
        <h2>안녕리액트</h2>
      </header>
      <MyFooter />
    </React.Fragment>
  );
}

export default App;
