import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons/faArrowLeftLong";
import {
  Checked,
  AnswerResults,
  Register,
  StateQuestionnaire,
  AlertType,
  RegisterAnswer,
} from "../../datatypes";
import { QUESTIONNAIRE_ENG, QUESTIONNAIRE_ITA } from "../../data";
import { CONTEXT } from "../../context";
import { Alert, Loading, Question, Result } from "..";

const Questionnaire: React.FC = () => {
  const context = useContext(CONTEXT);
  //   const dispatch = useContext(DISPATCH);

  const [stateQuestionnaire, setStateQuestionnaire] =
    useState<StateQuestionnaire>(QUESTIONNAIRE_ENG);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [alert, setAlert] = useState<AlertType | null>(null);
  const [register, setRegister] = useState<Register | null>(null);

  const [answerResults, setAnswerResults] = useState<AnswerResults>({
    corrects: [],
    incorrects: [],
    register: [],
  });

  const [result, setResult] = useState<boolean>(false);

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
      const missingAnswers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      answerResults.register.forEach((answer: RegisterAnswer) => {
        if (missingAnswers.includes(answer.question_number)) {
          const i: number = missingAnswers.indexOf(answer.question_number);
          missingAnswers.splice(i, 1);
        }
      });
      answerResults.register.length == 10
        ? setResult(true)
        : setAlert({ type: "errorResult", toggle: true, data: missingAnswers });
    } else if (register.index < 9) {
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
      setAlert({ type: "goBack", toggle: true });
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

  const checkAnswers = (
    checked: Checked,
    correctAnswer: number,
    answer: number
  ) => {
    const data = { ...answerResults };
    let index_1 = 0;

    while (index_1 <= data.register.length) {
      if (data.register.length == 0) {
        data.register.push({
          question_number: stateQuestionnaire.counterQuestions,
          answers: checked,
        });
        break;
      } else if (data.register.length >= index_1) {
        if (data.register.length == index_1) {
          data.register.push({
            question_number: stateQuestionnaire.counterQuestions,
            answers: checked,
          });
          break;
        } else if (
          data.register[index_1].question_number ==
          stateQuestionnaire.counterQuestions
        ) {
          data.register[index_1] = {
            ...data.register[index_1],
            answers: checked,
          };
          break;
        }
      }
      index_1++;
    }

    if (correctAnswer == answer) {
      if (data.incorrects.includes(stateQuestionnaire.counterQuestions)) {
        data.incorrects = data.incorrects.filter(
          (element: number) => element != stateQuestionnaire.counterQuestions
        );
      }
      if (!data.corrects.includes(stateQuestionnaire.counterQuestions)) {
        data.corrects.push(stateQuestionnaire.counterQuestions);
      }
    }
    if (correctAnswer !== answer) {
      if (data.corrects.includes(stateQuestionnaire.counterQuestions)) {
        data.corrects = data.corrects.filter(
          (element: number) => element != stateQuestionnaire.counterQuestions
        );
      }
      if (!data.incorrects.includes(stateQuestionnaire.counterQuestions)) {
        data.incorrects.push(stateQuestionnaire.counterQuestions);
      }
    }
    setAnswerResults(data);
  };

  return (
    <>
      {result ? (
        <Result corrects={answerResults.corrects} />
      ) : (
        <div
          onClick={
            alert?.toggle
              ? () => setAlert({ type: "goBack", toggle: false })
              : () => null
          }
          className="w-[100%]"
        >
          <div className="flex mt-4 mb-2 py-2 justify-around mx-2">
            <div
              id="1"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              1
            </div>
            <div
              id="2"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              2
            </div>
            <div
              id="3"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              3
            </div>
            <div
              id="4"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              4
            </div>
            <div
              id="5"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              5
            </div>
            <div
              id="6"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              6
            </div>
            <div
              id="7"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              7
            </div>
            <div
              id="8"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              8
            </div>
            <div
              id="9"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              9
            </div>
            <div
              id="10"
              className="flex items-center justify-center w-6 h-6 text-slate-900 p-4 font-bold rounded-full bg-green-300"
            >
              10
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-around w-[100%] text-3xl font-extrabold">
            {stateQuestionnaire.title + stateQuestionnaire.counterQuestions}
            <button
              onClick={() => setAlert({ type: "goBack", toggle: true })}
              className={`flex items-center justify-center mr-1 mb-3 sm:my-auto px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
                context?.darkMode
                  ? " bg-green-300 hover:bg-green-400"
                  : " bg-green-300 hover:bg-green-400"
              } ${alert?.toggle ? "pointer-events-none" : "cursor-pointer"}`}
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
                {alert?.toggle && <Alert {...alert} />}
              </div>
              {register && (
                <Question
                  {...stateQuestionnaire.questions[
                    register.casualIndex[register.index]
                  ]}
                  counterQuestion={stateQuestionnaire.counterQuestions}
                  alert={alert?.toggle}
                  register={answerResults.register}
                  checkAnswers={checkAnswers}
                  id={stateQuestionnaire.counterQuestions.toString()}
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
                    } ${
                      alert?.toggle ? "pointer-events-none" : "cursor-pointer"
                    }`}
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
                    } ${
                      alert?.toggle ? "pointer-events-none" : "cursor-pointer"
                    }`}
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
