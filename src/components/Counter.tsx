import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      // Prevent count from going below 0
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  const styles = useSpring({
    height: `${count * 10}vh`,
    width: "100vw",
    backgroundColor: `hsl(195, 53%, 79%)`,
    config: { duration: 200 },
  });

  const AnimatedDiv = animated("div");

  return (
    <div className="counter-container">
      <div className="counter-level-wrapper">
        <AnimatedDiv style={styles} className="counter-level" />
      </div>
      <div className="counter-controls">
        <Button variant="contained" onClick={incrementCount}>
          Increment
        </Button>
        <span>{count}</span>
        <Button variant="contained" onClick={decrementCount}>
          Decrement
        </Button>
        <Button variant="contained" color="secondary" onClick={resetCount}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
