import { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return children(count, increment, decrement);
};

export default Counter;
