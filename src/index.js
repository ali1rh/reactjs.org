import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todos";

function App() {
  return (
    <>
      <h1>سلام دنیا</h1>
      <Todo />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
