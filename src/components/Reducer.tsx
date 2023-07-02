import { FunctionComponent, useReducer } from "react";

interface ReducerProps {}

// מצב הסטייס ההתחלתי
let initialState: number = 0;

// מה לעשות עם הסטייס
let reducer = (state: number, action: string) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer: FunctionComponent<ReducerProps> = () => {
  let [count, changeCount] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => changeCount("inc")}>inc</button>
      <button onClick={() => changeCount("dec")}>dec</button>
      <button onClick={() => changeCount("reset")}>reset</button>
    </>
  );
};

export default Reducer;
