import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Question } from "..";
import { StateQuestionnaire } from "../../datatypes";
import { QUESTIONNAIRE_ENG, QUESTIONNAIRE_ITA } from "../../data";
import { CONTEXT, DISPATCH } from "../../context";

const Questionnaire: React.FC = () => {

  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  const [stateQuestionnaire, setStateQuestionnaire] = useState<StateQuestionnaire>(QUESTIONNAIRE_ENG);

  useEffect(() => {
    context.language == "ENG" ? setStateQuestionnaire(QUESTIONNAIRE_ENG) : setStateQuestionnaire(QUESTIONNAIRE_ITA);
  }, [context.language])

  return (
    <>
      <div className="flex justify-around w-[100%] text-4xl mt-10 font-extrabold">
        {stateQuestionnaire.title + stateQuestionnaire.counterQuestions}
        <button
          onClick={() => dispatch({ type: "toggleQuestionnaire" })}
          className={`flex items-center px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
          context?.darkMode
            ? " bg-green-200 hover:bg-green-300"
            : " bg-green-400 hover:bg-green-500"
          }`}
        >
          Home
          <IoIosArrowBack />
        </button>
      </div>
      <div>
        <Question {...stateQuestionnaire.question}/>
      </div>  
    </>
  );
};

export default Questionnaire;
