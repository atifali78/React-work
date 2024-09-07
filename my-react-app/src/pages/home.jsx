import { useState, useEffect } from "react";
import Counter from "../components/counter";

function home() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState(["jeans", "Shirts"]);

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const addItemHandler = () => {
    setItems([...items, userInput]);
  };
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter the item"
      />
      {/* mapPing of the items */}
      <button onClick={addItemHandler}>Add Item</button>

      {items.map((item, index) => {
        return <Counter key={index} itemName={item} />;
      })}
    </>
  );
}
export default home;
