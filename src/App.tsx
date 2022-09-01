import React from "react";
import Router from "./router/routes";
import GlobalStyle from "./styles/styles";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <div className="scroll-container">
        <div className="scroll-area">1</div>
        <div className="scroll-area">2</div>
        <div className="scroll-area">3</div>
        <div className="scroll-area">4</div>
      </div> */}
    </>
  );
}

export default App;
