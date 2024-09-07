import { useState } from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  // passing value in array
  // useEffect(() => {
  //   console.log("Hello UseEffect with Count :", count);
  // }, [count]);

  // no array
  // useEffect(() => {
  //   console.log("Hello UseEffect with Count :", count);
  // });

  //empty array
  // useEffect(() => {
  //   console.log("Hello UseEffect with Count :", count);
  // }, []);

  //function
  /*

  useEffect(() => {
    console.log("Hello UseEffect with Count :", count);
    const inter = setInterval(() => {
      console.log("Hello");
    }, 1000);
    return () => {
      console.log("CleanUp Function", count);
      clearInterval(inter);
    };
  }, [count]);

*/

  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={clickHandler}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          props.xyz();
        }}
      >
        Delete
      </button>
    </>
  );
};

Counter.propTypes = {
  itemName: PropTypes.string.isRequired,
  xyz: PropTypes.func.isRequired,
};

export default Counter;
