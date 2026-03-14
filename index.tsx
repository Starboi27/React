import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2"; // 이 줄이 반드시 있어야 합니다!

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
);
