import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons/faArrowLeftLong";
import { Register, StateQuestionnaire } from "../../datatypes";
import { QUESTIONNAIRE_ENG, QUESTIONNAIRE_ITA } from "../../data";
import { CONTEXT } from "../../context";
import { Alert, Loading, Question, Result } from "..";

const Questionnaire: React.FC = () => {
  const context = useContext(CONTEXT);
  //   const dispatch = useContext(DISPATCH);

  const [stateQuestionnaire, setStateQuestionnaire] =
    useState<StateQuestionnaire>(QUESTIONNAIRE_ENG);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [register, setRegister] = useState<Register | null>(null);
  const [dataResult, setDataResult] = useState<number[]>([]);

  
  useEffect(() => {
    setIsLoading(true);
    try {
      const randomIndices: number[] = [];
      while (randomIndices.length < 10) {
        const index: number = Math.floor(Math.random() * 12); //il valore della lunghezza massima dovrebbe essere 20 - inserire successivamente le altre domande mancanti
        if (!randomIndices.includes(index)) randomIndices.push(index);
      }
      setRegister({ casualIndex: randomIndices, index: 0 });
      setIsLoading(false);
    } catch (error) {
      console.log("entrato nel catch", error);
    }
  }, []);

  useEffect(() => {
    context.language == "ENG"
      ? setStateQuestionnaire(
          (prevQuestionnaire: StateQuestionnaire): StateQuestionnaire => {
            const { title, questions } = QUESTIONNAIRE_ENG;
            return {
              title,
              questions,
              counterQuestions: prevQuestionnaire.counterQuestions,
            };
          }
        )
      : setStateQuestionnaire(
          (prevQuestionnaire: StateQuestionnaire): StateQuestionnaire => {
            const { title, questions } = QUESTIONNAIRE_ITA;
            return {
              title,
              questions,
              counterQuestions: prevQuestionnaire.counterQuestions,
            };
          }
        );
  }, [context.language]);

  const handleNext = (register: Register) => {
    if (register.index == 9) {
      setResult(true);
    } else {
      // setAlert(false);
      setStateQuestionnaire((prev: StateQuestionnaire): StateQuestionnaire => {
        return {
          ...prev,
          counterQuestions: prev.counterQuestions + 1,
        };
      });
      setRegister({ ...register, index: register.index + 1 });
    }
  };

  const handlePrev = (register: Register) => {
    if (register.index == 0) {
      setAlert(true);
    } else {
      setStateQuestionnaire((prev: StateQuestionnaire): StateQuestionnaire => {
        return {
          ...prev,
          counterQuestions: prev.counterQuestions - 1,
        };
      });
      setRegister({ ...register, index: register.index - 1 });
    }
    
  };

  const getDataResult = (
    answer: number,
    result: number,
    question: number = stateQuestionnaire.counterQuestions
  ) => {
    if (answer === result) {
      if (!dataResult.includes(question)) {
        setDataResult((prevResult: number[]) => [...prevResult, question]);
      }
    } else if (answer !== result) {
      if (dataResult.includes(question)) {
        setDataResult(
          dataResult.filter((answer: number) => answer !== question)
        );
      }
    }
    
  };

  return (
    <>
      {result ? (
        <Result result={dataResult}/>
      ) : (
        <div
          onClick={alert ? () => setAlert(false) : () => null}
          className="w-[100%]"
        >
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-around w-[100%] text-3xl mt-10 font-extrabold">
            {stateQuestionnaire.title + stateQuestionnaire.counterQuestions}
            <button
              onClick={() => setAlert((prev) => !prev)}
              className={`flex items-center justify-center mr-1 mb-3 sm:my-auto px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
                context?.darkMode
                  ? " bg-green-300 hover:bg-green-400"
                  : " bg-green-300 hover:bg-green-400"
              } ${alert ? "pointer-events-none" : "cursor-pointer"}`}
            >
              <span>
                Home
                <FontAwesomeIcon
                  icon={faHouse}
                  size="lg"
                  style={{ color: "#0f172a" }}
                  className="ml-2 sm:ml-1"
                />
              </span>
            </button>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col relative">
              <div className="w-[100%] absolute px-2 mt-32 sm:mt-24 flex justify-center">
                {alert && <Alert />}
              </div>
              {register && (
                <Question
                  {...stateQuestionnaire.questions[
                    register?.casualIndex[register.index]
                  ]}
                  alert={alert}
                  getDataResult={getDataResult}
                />
              )}
              {register && (
                <div className="flex justify-around w-[100%] text-4xl mt-10 font-extrabold">
                  <button
                    onClick={() => handlePrev(register)}
                    className={`flex items-center justify-center px-3 py-2 h-10 sm:h-auto w-16 sm:w-20  rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
                      context?.darkMode
                        ? " bg-green-300 hover:bg-green-400"
                        : " bg-green-300 hover:bg-green-400"
                    } ${alert ? "pointer-events-none" : "cursor-pointer"}`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      size="lg"
                      style={{ color: "#0f172a" }}
                    />
                  </button>
                  <button
                    onClick={() => handleNext(register)}
                    className={`flex items-center justify-center px-3 py-2 h-10 sm:h-auto w-16 sm:w-20 rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
                      context?.darkMode
                        ? " bg-green-300 hover:bg-green-400"
                        : " bg-green-300 hover:bg-green-400"
                    } ${alert ? "pointer-events-none" : "cursor-pointer"}`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      size="lg"
                      style={{ color: "#0f172a" }}
                    />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Questionnaire;
