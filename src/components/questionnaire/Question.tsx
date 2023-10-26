import React, { useContext, useEffect, useState } from "react";

import { CONTEXT } from "../../context";
import { QuestionType } from "../../datatypes";

const Question: React.FC<QuestionType> = ({
  question,
  options,
  alert,
  answer,
  getDataResult,
}) => {
  const context = useContext(CONTEXT);
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleAnswer = (name: string, result: number) => {
    getDataResult && getDataResult(answer, result);

    setChecks({ check1: false, check2: false, check3: false, check4: false });

    if (name == "answer_1") {
      setChecks((prev) => {
        return { ...prev, check1: !prev.check1 };
      });
    } else if (name == "answer_2") {
      setChecks((prev) => {
        return { ...prev, check2: !prev.check2 };
      });
    } else if (name == "answer_3") {
      setChecks((prev) => {
        return { ...prev, check3: !prev.check3 };
      });
    } else if (name == "answer_4") {
      setChecks((prev) => {
        return { ...prev, check4: !prev.check4 };
      });
    }
  };

  useEffect(() => {
    setChecks({ check1: false, check2: false, check3: false, check4: false });
  }, [options]);

  return (
    <div
      className={`flex flex-col tracking-wider leading-loose sm:mx-0 rounded-xl mt-3 mx-2 text-justify${
        alert ? "opacity-25" : "opacity-100"
      } ${context?.darkMode ? "text-slate-900" : "bg-green-300"}`}
    >
      <div
        className={`font-extrabold text-xl leading-relaxed mx-2 py-4 px-2 mb-4 mt-2 rounded-lg bg-green-200 text-center`}
      >
        {question}
      </div>

      <div
        onClick={() => handleAnswer("answer_1", options.indexOf(options[0]))}
        className={`flex items-center gap-2 m-4 2xl:mx-6 p-2 hover:m-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900"
            : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none"
        } ${
          checks.check1 &&
          (context.darkMode
            ? "bg-green-200 2xl:bg-green-300 text-xl"
            : "bg-green-200 text-xl")
        }`}
      >
        <input
          type="checkbox"
          name="answer_1"
          readOnly
          checked={checks.check1}
          value={options.indexOf(options[0])}
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
        <label htmlFor="answer" className="cursor-pointer w-[100%]">
          {options[0]}
        </label>
      </div>

      <div
        onClick={() => handleAnswer("answer_2", options.indexOf(options[1]))}
        className={`flex items-center gap-2 m-4 2xl:mx-6 p-2 hover:m-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900"
            : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none"
        } ${
          checks.check2 &&
          (context.darkMode
            ? "bg-green-200 2xl:bg-green-300 text-xl"
            : "bg-green-200 text-xl")
        }`}
      >
        <input
          type="checkbox"
          name="answer_2"
          readOnly
          checked={checks.check2}
          value={options.indexOf(options[1])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer" className="cursor-pointer w-[100%]">
          {options[1]}
        </label>
      </div>

      <div
        onClick={() => handleAnswer("answer_3", options.indexOf(options[2]))}
        className={`flex items-center gap-2 m-4 2xl:mx-6 p-2 hover:m-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900"
            : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none"
        } ${
          checks.check3 &&
          (context.darkMode
            ? "bg-green-200 2xl:bg-green-300 text-xl"
            : "bg-green-200 text-xl")
        }`}
      >
        <input
          type="checkbox"
          name="answer_3"
          readOnly
          checked={checks.check3}
          value={options.indexOf(options[2])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer" className="cursor-pointer w-[100%]">
          {options[2]}
        </label>
      </div>

      <div
        onClick={() => handleAnswer("answer_4", options.indexOf(options[3]))}
        className={`flex items-center gap-2 m-4 2xl:mx-6 p-2 hover:m-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer ${
          context?.darkMode
            ? "2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900"
            : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none"
        } ${
          checks.check4 &&
          (context.darkMode
            ? "bg-green-200 2xl:bg-green-300 text-xl"
            : "bg-green-200 text-xl")
        }`}
      >
        <input
          type="checkbox"
          name="answer_4"
          readOnly
          checked={checks.check4}
          value={options.indexOf(options[3])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer" className="cursor-pointer w-[100%]">
          {options[3]}
        </label>
      </div>
    </div>
  );
};

export default Question;
