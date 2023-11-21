import React, { useContext, useState } from "react";
import { CONTEXT, DISPATCH } from "../../context";
import { ResultType } from "../../datatypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa0,
  faStar,
  faSlash,
  IconDefinition,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Result: React.FC<ResultType> = ({ corrects }) => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  const [icon] = useState<IconDefinition[]>([
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    fa9,
    fa0,
  ]);

  return (
    <div className="flex flex-col items-center w-[95%] sm:w-[100%] rounded-xl mt-4 pb-4 bg-green-300">
      <div className="flex justify-center gap-6 w-[100%] h-28 mt-4">
        {corrects.length >= 8 ? (
          <>
            <FontAwesomeIcon
              icon={faStar}
              rotation={270}
              style={{ color: "#0f172a" }}
              className="w-20 h-20 mt-4"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#0f172a" }}
              className="w-20 h-20"
            />
            <FontAwesomeIcon
              icon={faStar}
              rotation={90}
              style={{ color: "#0f172a" }}
              className="w-20 h-20 mt-4"
            />
          </>
        ) : corrects.length >= 5 ? (
          <>
            <FontAwesomeIcon
              icon={faStar}
              rotation={270}
              style={{ color: "#0f172a" }}
              className="w-20 h-20 mt-4"
            />
            <FontAwesomeIcon
              icon={faStar}
              rotation={90}
              style={{ color: "#0f172a" }}
              className="w-20 h-20 mt-4"
            />
          </>
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#0f172a" }}
            className="w-20 h-20 mt-4"
          />
        )}
      </div>
      <div className="flex flex-col items-center w-[100%] py-4 text-2xl font-normal tracking-wider text-slate-900">
        {context.language == "ENG"
          ? "Your score is:"
          : "Il tuo punteggio è di:"}
        <div className="flex justify-center items-center gap-2 my-8 w-[100%]">
          {corrects && (
            <>
              {corrects.length == 10 ? (
                <>
                  <FontAwesomeIcon
                    icon={icon[0]}
                    size="2xl"
                    style={{ color: "#0f172a" }}
                  />
                  <FontAwesomeIcon
                    icon={icon[9]}
                    size="2xl"
                    style={{ color: "#0f172a" }}
                  />
                </>
              ) : corrects.length == 0 ? (
                <FontAwesomeIcon
                  icon={icon[9]}
                  size="2xl"
                  style={{ color: "#0f172a" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={icon[corrects.length - 1]}
                  size="2xl"
                  style={{ color: "#0f172a" }}
                />
              )}
              <FontAwesomeIcon
                icon={faSlash}
                rotation={270}
                size="xl"
                style={{ color: "#0f172a" }}
              />
              <FontAwesomeIcon
                icon={icon[0]}
                size="2xl"
                style={{ color: "#0f172a" }}
              />
              <FontAwesomeIcon
                icon={icon[9]}
                size="2xl"
                style={{ color: "#0f172a" }}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-[100%] text-2xl font-bold tracking-wider text-slate-900 px-2  text-center">
        {context.language == "ENG"
          ? `You answered ${corrects.length} out of 10 questions correctly.`
          : `Hai risposto correttamente a ${corrects.length} domande su 10.`}
        <br />
        <br />
        {corrects.length <= 4
          ? context.language == "ENG"
            ? "Our data shows low knowledge on the topic."
            : "Dai nostri dati risulta una conoscenza bassa sull'argomento."
          : corrects.length <= 7
          ? context.language == "ENG"
            ? "Our data shows an average knowledge on the topic."
            : "Dai nostri dati risulta una conoscenza media sull'argomento."
          : context.language == "ENG"
          ? "Our data shows a high level of knowledge on the topic."
          : "Dai nostri dati risulta una conoscenza alta sull'argomento."}
        <br />
        <br />
        <div
          className={`font-medium text-sm sm:text-lg text-justify px-4 tracking-widest leading-7 rounded-lg mb-4 ${
            context.darkMode ? "bg-slate-900 text-slate-100" : "bg-green-200"
          }`}
        >
          {context.language == "ENG"
            ? "We thank you for taking the test, we are committed every day to analyzing people's knowledge on the pursuit of sustainability. Your time dedicated to us will help us improve our planet"
            : "Ti ringraziamo per aver effettuato il test, ci impegnamo ogni giorno ad analizzare le conoscenze delle persone sulla ricerca della sostenibilità. Il tuo tempo dedicatoci ci aiuterà a migliorare il nostro pianeta"}
        </div>
      </div>
      <button
        className={`flex items-center justify-center mr-1 mb-3 sm:my-auto px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base font-bold sm:text-xl ${
          context?.darkMode ? " bg-slate-900 text-slate-100" : " bg-green-200"
        }`}
        onClick={() => dispatch({ type: "toggleQuestionnaire" })}
      >
        <span>
          Home
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            style={{ color: context.darkMode ? "white" : "#0f172a" }}
            className="ml-2 sm:ml-1"
          />
        </span>
      </button>
    </div>
  );
};

export default Result;
