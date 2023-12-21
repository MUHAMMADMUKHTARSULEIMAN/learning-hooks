import {useReducer} from "react";

function reducer(state, action) {
  if(action.type === "increment-age") {
    return {
      age: state.age + 1
    };
  }
  throw Error("Unknown action");
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {age: 42});

  return (
    <div>
      <button onClick={() => {dispatch({type: "increment-age"})}}>
        Increment age
      </button>
      <p>
        Hello! You are {state.age}
      </p>
    </div>
  )
}