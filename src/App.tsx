import React from "react";
import TodoInput from "./components/TodoInput";
import Login from "./components/Login";
import AppView from "./components/Appview";
import "./sass/main.scss";

const App: React.FC = () => {
  const name = localStorage.getItem("Name");

  if (name === null) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <>
        <AppView />
        <TodoInput />
      </>
    );
  }
};

export default App;
