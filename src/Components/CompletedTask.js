import React, { useEffect, useState } from "react";

const CompletedTask = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/completelist")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [list]);
  return (
    <div class="w-80 mx-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l) => (
            <tr>
              <td>{l.date}</td>
              <td>{l.task}</td>
              <td>Finish</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTask;
