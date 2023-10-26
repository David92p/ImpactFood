import React, { useContext } from "react";
import { CONTEXT, DISPATCH } from "../../context";

interface x {
  result: number[]
}

const Result: React.FC<x> = ({result}) => {
  const dispatch = useContext(DISPATCH);
  console.log(result);
  
  return <div>RESULT HERE .......btn.
    <button onClick={() => dispatch({ type: "toggleQuestionnaire" })}>BACK</button>
  </div>;
};

export default Result;
