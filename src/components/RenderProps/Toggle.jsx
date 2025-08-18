import { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handelToggle = () => setToggle((prev) => !prev);
  return children(toggle, handelToggle);
};

export default Toggle;
