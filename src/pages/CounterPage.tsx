import React from "react";
import Counter from "../components/Counter"; // Adjust path if needed

const CounterPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
};

export default CounterPage;
