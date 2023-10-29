import React, { useContext } from "react";
import { DISPATCH } from "../../context";


const Result: React.FC = () => {
  const dispatch = useContext(DISPATCH);

  
  return <div>RESULT HERE .......btn.
    <button onClick={() => dispatch({ type: "toggleQuestionnaire" })}>BACK</button>
  </div>;
};

export default Result;
