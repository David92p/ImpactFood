import React, { useContext } from "react";
import { CONTEXT, DISPATCH } from "../../context";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const Alert: React.FC = () => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  return (
    <div
      className={`flex flex-col justify-around items-center h-60 sm:h-72 w-80 text-black rounded-lg opacity-100 z-10 ${
        context.darkMode ? "bg-green-200 opacity-100" : "bg-green-300"
      }`}
    >
      <FontAwesomeIcon
        icon={faCircleExclamation}
        beat
        size="2xl"
        style={{ color: "#0f172a" }}
      />
      <div className="text-center font-extrabold text-xl">
        {context.language == "ENG"
          ? "DO YOU WANT TO INTERRUP THE QUESTIONNAIRE?"
          : "VUOI INTERROMPERE IL QUESTIONARIO?"}
      </div>
      <button
        onClick={() => dispatch({ type: "toggleQuestionnaire" })}
        className={`flex items-center justify-center px-3 py-2 h-10 sm:h-auto w-24 rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
          context?.darkMode
            ? " bg-green-300 hover:bg-green-400"
            : " bg-green-200 hover:bg-green-400"
        }`}
      >
        <FontAwesomeIcon icon={faCheck} size="xl" />
      </button>
    </div>
  );
};

export default Alert;