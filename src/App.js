import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Components/Calender";
import CompletedTask from "./Components/CompletedTask";
import Home from "./Components/Home";
import Error from "./Components/Share/Error";
import Navbar from "./Components/Share/Navbar";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todolist" element={<TodoList></TodoList>}></Route>
        <Route
          path="/completedtask"
          element={<CompletedTask></CompletedTask>}
        ></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
