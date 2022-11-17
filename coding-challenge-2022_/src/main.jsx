import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CodingChallengeApp } from "./CodingChallengeApp";
import store from '../src/store/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    
      <CodingChallengeApp />
    
  </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
