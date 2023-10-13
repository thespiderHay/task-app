import React from "react";
import Navigation from "./components/Nav/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import TaskForm from "./UI/TaskForm";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TaskForm" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
