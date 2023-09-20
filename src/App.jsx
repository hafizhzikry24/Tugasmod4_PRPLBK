import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Button from "./elements/button";
import TextInput from "./elements/TextInput";

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nama Anda: ", name);
    setSubmittedName(name); // Update the submitted name
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Router>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="main">

      <h1>Praktikum RPLBK - Modul 2</h1>
      <h1>Kelompok 11</h1>

        <Card />
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            border="aquamarine"
            placeholder="Nama"
            value={name}
            onChange={handleNameChange}
          />
          <Button background="aquamarine" type="submit">
            Kirim
          </Button>
        </form>
        {submittedName && (
          <div>
            <p>Hallo,{submittedName}</p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
