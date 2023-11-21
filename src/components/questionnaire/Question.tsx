import React, { useContext, useEffect, useState } from "react";

import { CONTEXT } from "../../context";
import { Checked, QuestionType } from "../../datatypes";

const Question: React.FC<QuestionType> = ({
  question,
  options,
  answer,
  counterQuestion,
  alert,
  register,
  checkAnswers,
  id,
}) => {
  const context = useContext(CONTEXT);

  const [cheek, setCheek] = useState<Checked>({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  });

  const handleAnswer = async (name: string, value: number) => {
    let data = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
    };

    if (name == "answer_1") {
      data = { ...data, checked1: !data.checked1 };
    } else if (name == "answer_2") {
      data = { ...data, checked2: !data.checked2 };
    } else if (name == "answer_3") {
      data = { ...data, checked3: !data.checked3 };
    } else if (name == "answer_4") {
      data = { ...data, checked4: !data.checked4 };
    }
    if (id) {
      const element = document.getElementById(id);
      element?.remove();
    }

    setCheek(data);
    checkAnswers && checkAnswers(data, answer, value);
  };

  useEffect(() => {
    const registerControl = register?.find(
      ({ question_number }) => question_number == counterQuestion
    );
    registerControl
      ? setCheek(registerControl.answers)
      : setCheek({
          checked1: false,
          checked2: false,
          checked3: false,
          checked4: false,
        });
  }, [counterQuestion, register]);
  return (
    <div
      className={`flex flex-col tracking-wider leading-loose sm:mx-0 rounded-xl mt-3 mx-2 text-justify ${
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
        className={`flex items-center gap-2 p-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer mt-4
        ${
          context?.darkMode
            ? `2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900 ${
                cheek.checked1 ? "text-slate-900" : ""
              }`
            : "2xl:hover:bg-green-200 text-slate-900"
        } 
        ${
          cheek.checked1
            ? `${
                context.darkMode
                  ? "bg-green-200 2xl:bg-green-300 text-xl mx-2"
                  : "bg-green-200 text-xl mx-2"
              }`
            : ` ${
                context.darkMode
                  ? "2xl:bg-green-200 hover:bg-green-200 hover:2xl:bg-green-300 text-slate-200 2xl:text-slate-900 hover:text-slate-900 2xl:mx-6 mx-2"
                  : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none hover:text-xl 2xl:mx-6 mx-2"
              }`
        }
        `}
      >
        <input
          type="checkbox"
          name="answer_1"
          readOnly
          checked={cheek.checked1}
          value={options.indexOf(options[0])}
          className={`h-7 w-10 2xl:w-7 hover:h-8 hover:w-12 2xl:hover:w-9 2xl:hover:h-9 cursor-pointer ${
            context.darkMode
              ? "bg-slate-100 hover:border-2 hover:border-slate-900"
              : "bg-green-200 hover:bg-green-300 2xl:bg-green-300 hover:border-2 hover:border-slate-900"
          } rounded-md transition-all`}
        />
        <label htmlFor="answer" className="cursor-pointer w-[100%]">
          {options[0]}
        </label>
      </div>

      <div
        onClick={() => handleAnswer("answer_2", options.indexOf(options[1]))}
        className={`flex items-center gap-2 p-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer my-8
        ${
          context?.darkMode
            ? `2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900 ${
                cheek.checked2 ? "text-slate-900" : ""
              }`
            : "2xl:hover:bg-green-200 text-slate-900"
        } 
        ${
          cheek.checked2
            ? `${
                context.darkMode
                  ? "bg-green-200 2xl:bg-green-300 text-xl mx-2"
                  : "bg-green-200 text-xl mx-2"
              }`
            : ` ${
                context.darkMode
                  ? "2xl:bg-green-200 hover:bg-green-200 hover:2xl:bg-green-300 text-slate-200 2xl:text-slate-900 hover:text-slate-900 2xl:mx-6 mx-2"
                  : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none hover:text-xl 2xl:mx-6 mx-2"
              }`
        }
        `}
      >
        <input
          type="checkbox"
          name="answer_2"
          readOnly
          checked={cheek.checked2}
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
        className={`flex items-center gap-2 p-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer mb-8
        ${
          context?.darkMode
            ? `2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900 ${
                cheek.checked3 ? "text-slate-900" : ""
              }`
            : "2xl:hover:bg-green-200 text-slate-900"
        } 
        ${
          cheek.checked3
            ? `${
                context.darkMode
                  ? "bg-green-200 2xl:bg-green-300 text-xl mx-2"
                  : "bg-green-200 text-xl mx-2"
              }`
            : ` ${
                context.darkMode
                  ? "2xl:bg-green-200 hover:bg-green-200 hover:2xl:bg-green-300 text-slate-200 2xl:text-slate-900 hover:text-slate-900 2xl:mx-6 mx-2"
                  : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none hover:text-xl 2xl:mx-6 mx-2"
              }`
        }
        `}
      >
        <input
          type="checkbox"
          name="answer_3"
          readOnly
          checked={cheek.checked3}
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
        className={`flex items-center gap-2 p-2 text-md hover:text-xl font-bold transition-all rounded-lg hover:font-extrabold cursor-pointer mb-4
        ${
          context?.darkMode
            ? `2xl:bg-green-200 2xl:hover:bg-green-300 text-slate-200 hover:text-slate-900 2xl:text-slate-900 ${
                cheek.checked4 ? "text-slate-900" : ""
              }`
            : "2xl:hover:bg-green-200 text-slate-900"
        } 
        ${
          cheek.checked4
            ? `${
                context.darkMode
                  ? "bg-green-200 2xl:bg-green-300 text-xl mx-2"
                  : "bg-green-200 text-xl mx-2"
              }`
            : ` ${
                context.darkMode
                  ? "2xl:bg-green-200 hover:bg-green-200 hover:2xl:bg-green-300 text-slate-200 2xl:text-slate-900 hover:text-slate-900 2xl:mx-6 mx-2"
                  : "2xl:hover:bg-green-200 text-slate-900 hover:border-2 hover:border-slate-900 2xl:border-none hover:text-xl 2xl:mx-6 mx-2"
              }`
        }
        `}
      >
        <input
          type="checkbox"
          name="answer_4"
          readOnly
          checked={cheek.checked4}
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
