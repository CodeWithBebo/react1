import React, { useMemo, useState } from "react";

// Functional component
// const MyComponent = ({ name }) => {
//   console.log("Rendering MyComponent");
//   return <div>Hello, {name}!</div>;
// };

// // Memoized component
// const MemoizedComponent = React.memo(MyComponent);

// Parent component
const MemoizationEx = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(99);
  //   const [multiply, setMultiply] = useState(null);
  const [count, setCount] = React.useState(0);
  const addition = () => {
    setAdd(add + 1);
    console.log("addition is running");
  };
  const subtraction = () => {
    setMinus(minus ? minus - 1 : 0);
    console.log("Minus is running");
  };
  const multiply = () => {
    console.log("Its calling the function");
    return add * 10;
  };
  const multiplication = useMemo(multiply, [add]);
  return (
    <div>
      {multiplication}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedComponent name={`User ${count}`} /> */}
      <button onClick={addition}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={subtraction}>subtraction</button>
      <span>{minus}</span>
    </div>
  );
};

export default MemoizationEx;
