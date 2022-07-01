import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./Loading";

const TodoListDetail = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: listing,
  } = useQuery("listing", () =>
    fetch("http://localhost:5000/todo").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // if (isLoading) {
  //   return <Loading />;
  // }
  const handleclick = (e) => {
    console.log(listing);
    if (e.target.checked === true) {
      const lp = listing.find((f) => f._id == e.target.value);
      const complete = { date: lp.date, task: lp.task };
      // setList(lp);
      fetch("http://localhost:5000/completelist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(complete),
      });
      // .then((res) => res.json())
      // .then((data) => {
      //   setList(data);
      // });
      fetch(`http://localhost:5000/todo/${lp._id}`, {
        method: "DELETE",
      });
      navigate("/completedtask");
    }
  };

  return (
    <div class="w-80 mx-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th> Action</th>
            <th>Date</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listing.map((l) => (
            <tr>
              <td>
                <input onClick={handleclick} value={l._id} type="checkbox" />
              </td>
              <td>{l.date}</td>
              <td>{l.task}</td>
              <td>
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListDetail;
