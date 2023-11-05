import React, { useContext } from "react";
import { CONTEXT, DISPATCH } from "../../context";
import { ResultType } from "../../datatypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Result: React.FC<ResultType> = ({ corrects }) => {
  const context = useContext(CONTEXT)
  const dispatch = useContext(DISPATCH);

  //console.log(corrects);
  
  return (
    <div className="flex flex-col w-[100%] mt-14 border-2 border-red-500">
      <div className="flex justify-center gap-6 w-[100%] h-28 bg-green-300">
        {corrects.length >= 8 
        ? (
          <>
            <FontAwesomeIcon icon={faStar} rotation={270} style={{color: "#0f172a",}} className="w-20 h-20 mt-4"/>
            <FontAwesomeIcon icon={faStar} style={{color: "#0f172a"}} className="w-20 h-20"/>
            <FontAwesomeIcon icon={faStar} rotation={90} style={{color: "#0f172a",}} className="w-20 h-20 mt-4"/>
          </>
          ) 
        : (corrects.length >= 5 
          ? (
            <>
              <FontAwesomeIcon icon={faStar} rotation={270} style={{color: "#0f172a",}} className="w-20 h-20 mt-4"/>
              <FontAwesomeIcon icon={faStar} rotation={90} style={{color: "#0f172a",}} className="w-20 h-20 mt-4"/>
            </>
          )
          : <FontAwesomeIcon icon={faStar} style={{color: "#0f172a"}} className="w-20 h-20"/>
        )}
        
      </div>
      <button onClick={() => dispatch({ type: "toggleQuestionnaire" })}>BACK</button>
    </div>
  )
};

export default Result;
