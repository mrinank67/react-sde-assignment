import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import UserFormPage from "./pages/UserFormPage";
import TextEditorPage from "./pages/TextEditorPage";
import "./App.css"; // Import your CSS

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Main container */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/user-form">User Form</Link>
            </li>
            <li>
              <Link to="/text-editor">Text Editor</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/user-form" element={<UserFormPage />} />
          <Route path="/text-editor" element={<TextEditorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
