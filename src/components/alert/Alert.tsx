import React, { useContext } from "react";
import { CONTEXT, DISPATCH } from "../../context";
import { AlertType } from "../../datatypes";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";


const Alert: React.FC<AlertType> = ({type, data}) => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  return (
    <div
      className={`flex flex-col justify-around items-center h-72 w-80 py-2 text-slate-900 rounded-2xl opacity-100 z-10 bg-green-300  ${
        context.darkMode
          ? "opacity-100"
          : "border-2 border-slate-900"
      }`}
    >
      <FontAwesomeIcon
        icon={faCircleExclamation}
        beat
        size="2xl"
        style={{ color: "#0f172a" }}
      />
      <div className="text-center font-extrabold text-xl px-2">
        {context.language == "ENG" ? (type == "goBack" ? "Do you want to quit?" : "Answer all questions to continue") : (type == "goBack" ? "Vuoi interrompere il questionario?" : "Rispondi a tutte le domande per proseguire") }
      </div>
      {type == "goBack" ? <button
        onClick={() => dispatch({ type: "toggleQuestionnaire" })}
        className={`flex items-center justify-center px-3 py-2 h-10 sm:h-auto w-24 rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
          context?.darkMode
            ? "bg-slate-900 hover:bg-green-200 hover:border-2 border-slate-900"
            : "bg-green-200 hover:bg-green-400"
        }`}
      >
        <FontAwesomeIcon
          icon={faCheck}
          size="xl"
          style={context.darkMode ? { color: "#4ade80" } : { color: "#0f172a" }}
        />
      </button> : 
        <div className="flex flex-col gap-4 w-[100%] p-2">
          <span className="text-center tracking-wider font-bold text-xl text-slate-900">{context.language == "ENG" ? "Missing answers" : `Numero ${data?.length == 1 ? "domanda" : "domande"} senza una risposta`}</span>
          <div className="flex justify-evenly flex-wrap gap-3">
            {data && data.map((element) => <span key={element} className="text-center font-extrabold w-10 h-10 bg-green-200 p-2 rounded-full">{element}</span>)}
          </div>
        </div>}
      
    </div>
  );
};

export default Alert;
