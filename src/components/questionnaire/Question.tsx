import React, { useContext } from "react";

import { CONTEXT, DISPATCH } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { QuestionType } from "../../datatypes";

const Question: React.FC<QuestionType> = ({
  question,
  options,
  // answer,
  // handleAnswers,
}) => {
  const context = useContext(CONTEXT);

  //console.log(answer, options);

  return (
    <div
      className={`flex flex-col tracking-wider leading-loose my-8 mx-4 sm:mx-0 rounded-xl text-2xl py-8  ${
        context?.darkMode ? "text-slate-900" : "bg-green-300"
      }`}
    >
      <div
        className={`font-extrabold sm:text-4xl text-justify leading-relaxed p-4 mb-8 rounded-lg bg-green-200 ${
          context?.darkMode ? null : "mx-2"
        }`}
      >
        {question}
      </div>

      <div
        className={`flex items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 hover:text-slate-900 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4 hover:bg-green-200 hover:border-2 hover:border-slate-800 2xl:border-none"
        }`}
      >
        <input
          type="checkbox"
          id="answer_1"
          name="answer_1"
          // checked= {false}
          // value={options.indexOf(options[0])}
          // onChange={() => handleAnswers(1)}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        {/* <FontAwesomeIcon
          icon={faCarrot}
          className=" apparea absolute h-6 ml-1 text-opacity-0 check-1 transition "
        /> */}
        <label htmlFor="answer_1" className="cursor-pointer w-[100%]">
          {options[0]}
        </label>
      </div>

      <div
        className={`flex items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 hover:text-slate-900 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4 hover:bg-green-200 hover:border-2 hover:border-slate-800 2xl:border-none"
        }`}
      >
        <input
          type="checkbox"
          id="answer_2"
          name="answer_2"
          //checked={false}
          // value={options.indexOf(options[1])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer_2" className="cursor-pointer w-[100%]">
          {options[1]}
        </label>
      </div>

      <div
        className={`flex items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 hover:text-slate-900 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4 hover:bg-green-200 hover:border-2 hover:border-slate-800 2xl:border-none"
        }`}
      >
        <input
          type="checkbox"
          id="answer_3"
          name="answer_3"
          //checked={false}
          // value={options.indexOf(options[2])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer_3" className="cursor-pointer w-[100%]">
          {options[2]}
        </label>
      </div>

      <div
        className={`flex items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 hover:text-slate-900 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4 hover:bg-green-200 hover:border-2 hover:border-slate-800 2xl:border-none"
        }`}
      >
        <input
          type="checkbox"
          id="answer_4"
          name="answer_4"
          //checked={false}
          // value={options.indexOf(options[3])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer_4" className="cursor-pointer w-[100%]">
          {options[3]}
        </label>
      </div>
    </div>
  );
};

export default Question;
