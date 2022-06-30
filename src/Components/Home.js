import React from "react";
import CompletedTask from "./CompletedTask";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div>
      <TodoList></TodoList>
      <CompletedTask></CompletedTask>
    </div>
  );
};

export default Home;
