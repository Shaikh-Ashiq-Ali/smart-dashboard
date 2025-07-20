"use client";
import { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function test() {
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <Container className="text-center">
      <div className="d-flex align-content-center justify-content-around w-100 mb-3">
        <Button onClick={() => dispatch({ type: "increment" })}>Increment +</Button>
        <h4>{state.count}</h4>
        <Button onClick={() => dispatch({ type : 'decrement'})}>Decrement -</Button>
      </div>
      <Button onClick={() => dispatch({ type : 'reset'})}>Reset</Button>
    </Container>
  );
}
