import { data } from "autoprefixer";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import TodoListDetail from "./TodoListDetail";

const TodoList = () => {
  const { register, handleSubmit } = useForm();
  // const [state, setState] = useState([]);
  const onSubmit = (data) => {
    const date = data.date;
    const task = data.taskDescription;
    const todo = {
      date: date,
      task: task,
    };
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Task Save Successfully");
      });
  };

  return (
    <div className="App">
      <label for="my-modal-6" class="btn my-5 modal-button">
        Add Task
      </label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label class="label">
              <span class="label-text">Date</span>
            </label>
            <input
              type="date"
              class="input input-bordered"
              {...register("date")}
            />
            <label class="label">
              <span class="label-text">Task Description</span>
            </label>
            <input
              type="text"
              class="input input-bordered"
              {...register("taskDescription")}
            />
            {/* <input type="submit" /> */}
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      <TodoListDetail></TodoListDetail>
    </div>
  );
};

export default TodoList;
