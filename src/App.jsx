import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

function App() {
  const [countt, setCount] = useState(0);
  const [count, updateCount] = useReducer(countReducer, 0);

  function countReducer(state, action) {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "double") {
      return state * 2;
    } else if (action === "puissance") {
      return state * state;
    } else if (action === "division") {
      return state / 2;
    } else if (action === "aleatoire") {
      return (state = Math.floor(Math.random() * 100));
    } else if (action === "reset") {
      return 0;
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => updateCount("increment")}>+ 1</button>
      <button onClick={() => updateCount("decrement")}>- 1</button>
      <button onClick={() => updateCount("double")}>x 2</button>
      <button onClick={() => updateCount("puissance")}>puissance</button>
      <button onClick={() => updateCount("division")}>/2</button>
      <button onClick={() => updateCount("aleatoire")}>?</button>
      <button onClick={() => updateCount("reset")}>...</button>
    </div>
  );
}

export default App;
