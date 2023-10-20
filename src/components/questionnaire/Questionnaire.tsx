import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { StateQuestionnaire } from "../../datatypes";
import { QUESTIONNAIRE_ENG, QUESTIONNAIRE_ITA } from "../../data";
import { CONTEXT, DISPATCH } from "../../context";
import { Loading, Question } from "..";

const Questionnaire: React.FC = () => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  const [stateQuestionnaire, setStateQuestionnaire] =
    useState<StateQuestionnaire>(QUESTIONNAIRE_ENG);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [indexCasual, setIndexCasual] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const randomIndices: number[] = [];
      while (randomIndices.length < 10) {
        const index: number = Math.floor(Math.random() * 12); //il valore della lunghezza massima dovrebbe essere 20 - inserire successivamente le altre domande mancanti
        if (!randomIndices.includes(index)) randomIndices.push(index);
      }
      setIndexCasual(randomIndices);
      setIsLoading(false);
    } catch (error) {
      console.log("entrato nel catch", error);
    }
  }, []);

  useEffect(() => {
    context.language == "ENG"
      ? setStateQuestionnaire(QUESTIONNAIRE_ENG)
      : setStateQuestionnaire(QUESTIONNAIRE_ITA);
  }, [context.language]);

  return (
    <>
      <div className="flex justify-around w-[100%] text-4xl mt-10 font-extrabold">
        {stateQuestionnaire.title + stateQuestionnaire.counterQuestions}
        <button
          onClick={() => dispatch({ type: "toggleQuestionnaire" })}
          className={`flex items-center px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
            context?.darkMode
              ? " bg-green-300 hover:bg-green-400"
              : " bg-green-300 hover:bg-green-400"
          }`}
        >
          Home
          <IoIosArrowBack />
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Question {...stateQuestionnaire.questions[indexCasual[0]]} />
      )}
      {/* <div className="flex justify-around w-[100%] h-[100%] text-4xl mt-10 font-extrabold border-2 border-red-400">
        <button
          className={`flex items-center px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
            context?.darkMode
              ? " bg-green-300 hover:bg-green-400"
              : " bg-green-300 hover:bg-green-400"
          }`}
        >
          PREV
        </button>
        <button
          className={`flex items-center px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
            context?.darkMode
              ? " bg-green-300 hover:bg-green-400"
              : " bg-green-300 hover:bg-green-400"
          }`}
        >
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default Questionnaire;
