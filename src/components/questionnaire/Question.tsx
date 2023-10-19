import React, { useContext } from "react";

import type { Question } from "../../datatypes";
import { CONTEXT, DISPATCH } from "../../context";

const Question: React.FC<Question> = ({ question, options, answer }) => {
  const context = useContext(CONTEXT);
  // const dispatch = useContext(DISPATCH);

  // ${
  //       context?.darkMode ? "bg-green-200" : "bg-green-300"
  //     }
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
        className={`flex items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4"
        }`}
      >
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">{options[0]}</label>
      </div>

      <div
        className={`flex h-auto items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4"
        }`}
      >
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">{options[1]}</label>
      </div>

      <div
        className={`flex h-auto items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4 "
        }`}
      >
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">{options[2]}</label>
      </div>

      <div
        className={`flex h-auto items-center gap-4 font-medium pl-2 2xl:pl-6 sm:text-3xl mx-2 my-4 2xl:mx-6 2xl:my-4 hover:mx-2 transition-all rounded-lg ${
          context?.darkMode
            ? "2xl:bg-green-200 hover:bg-green-300 2xl:text-slate-900 text-slate-200 2xl:py-4"
            : "2xl:bg-green-200 text-slate-900 2xl:py-4"
        }`}
      >
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">{options[3]}</label>
      </div>
    </div>
  );
};

export default Question;
