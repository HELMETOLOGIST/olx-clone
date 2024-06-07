import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context, { FirebaseContext } from "./store/Context.jsx";
import { app, auth, db, storage } from "./firebase/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ app, auth, db, storage }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
);
