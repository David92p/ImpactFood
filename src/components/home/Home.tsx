import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { StateHome } from "../../datatypes";
import { CONTEXT, DISPATCH } from "../../context";
import { HOME_ENG, HOME_ITA } from "../../data";
import { IoIosArrowBack } from "react-icons/io";

const Home: React.FC = () => {
  const context = useContext(CONTEXT);
  const dispatch = useContext(DISPATCH);

  const [stateHome, setStateHome] = useState<StateHome>(HOME_ENG);

  useEffect(() => {
    context.language == "ENG" ? setStateHome(HOME_ENG) : setStateHome(HOME_ITA);
  }, [context.language]);

  return (
    <>
      <div className="text-3xl sm:text-4xl text-center mt-8 font-extrabold">
        {stateHome.title}
      </div>
      <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-2 px-6" />
      <div className="flex flex-col items-center my-4 mx-2 text-xl sm:text-lg text-center font-bold">
        {stateHome.subtitle}
        <button
          onClick={() => dispatch({ type: "toggleQuestionnaire" })}
          className={`px-4 py-2 w-30 rounded-xl tracking-wider my-auto mt-2 text-xl text-slate-900 hover:font-extrabold hover:w-28 hover:h-12 transition-all ${
            context?.darkMode
              ? " bg-red-500 hover:bg-green-300"
              : " bg-green-400 hover:bg-green-500"
          }`}
        >
          START
        </button>
      </div>
      <div
        className={`flex flex-col  w-[100%] h-auto sm:gap-y-10 text-lg sm:text-2xl p-4 ${
          stateHome.toggleBtnDocumentation ? "items-center" : null
        }`}
      >
        {stateHome.toggleBtnDocumentation ? (
          <div className="text-justify text-black p-4 sm:w-2/3 bg-slate-100 rounded-xl">
            {stateHome.documentation.description}
            <button
              onClick={() =>
                setStateHome((prev: StateHome) => {
                  return {
                    ...prev,
                    toggleBtnDocumentation: !prev.toggleBtnDocumentation,
                  };
                })
              }
              className={`flex items-center px-4 py-2 w-auto rounded-xl tracking-wider my-auto mt-2 text-xl text-slate-900 hover:font-extrabold  ${
                context?.darkMode
                  ? " bg-green-200 hover:bg-green-300"
                  : " bg-green-400 hover:bg-green-500"
              }`}
            >
              {context.language === "ENG" ? "BACK" : "TORNA"}
              <IoIosArrowBack />
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 sm:gap-x-10 mb-3 sm:mb-4 text-slate-900 font-extrabold">
              <button
                onClick={() =>
                  setStateHome((prev: StateHome) => {
                    return {
                      ...prev,
                      toggleBtnDocumentation: !prev.toggleBtnDocumentation,
                      documentation: {
                        options: prev.documentation.options,
                        description: stateHome.documentation.options[0],
                      },
                    };
                  })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {stateHome.btnDocumentation[0]}
              </button>
              <button
                onClick={() =>
                  setStateHome((prev: StateHome) => {
                    return {
                      ...prev,
                      toggleBtnDocumentation: !prev.toggleBtnDocumentation,
                      documentation: {
                        options: prev.documentation.options,
                        description: stateHome.documentation.options[1],
                      },
                    };
                  })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {stateHome.btnDocumentation[1]}
              </button>
            </div>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 sm:gap-x-10 text-slate-900 font-extrabold">
              <button
                onClick={() =>
                  setStateHome((prev: StateHome) => {
                    return {
                      ...prev,
                      toggleBtnDocumentation: !prev.toggleBtnDocumentation,
                      documentation: {
                        options: prev.documentation.options,
                        description: stateHome.documentation.options[2],
                      },
                    };
                  })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {stateHome.btnDocumentation[2]}
              </button>
              <button
                onClick={() =>
                  setStateHome((prev: StateHome) => {
                    return {
                      ...prev,
                      toggleBtnDocumentation: !prev.toggleBtnDocumentation,
                      documentation: {
                        options: prev.documentation.options,
                        description: stateHome.documentation.options[3],
                      },
                    };
                  })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {stateHome.btnDocumentation[3]}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
