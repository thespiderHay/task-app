import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/TaskForm">Add Task</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
