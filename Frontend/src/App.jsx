import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
// import useEffect from 'react';

function App() {
  const [student, setstudent] = useState([]);

  useEffect(() => {
    axios
      .get("/api/student")
      .then((response) => {
        setstudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>It All About This Page</h1>
       <p>All Article is :- {student.length}</p>
      {student.map((student, index) => (
        <div key={student.id}>
          <h2>{student.id}</h2>
          <h3>{student.title}</h3>
          <p>{student.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
