import logo from './logo.svg';
import RandomQuoteMachine from "./RandomQuoteMachine";
import './App.scss';
import React from "react";

function App() {
  return (
      <div>
        <div id="quote-box">
          <RandomQuoteMachine />
        </div>
       <p id="signature">
         by ElGfm
      </p>
      </div>
  );
}

export default App;
