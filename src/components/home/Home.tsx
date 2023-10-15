import React, { useContext } from "react";

import logo from "../../assets/images/logo.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { DispatchContext, StarterContext } from "../../context/context";

const Home: React.FC = () => {
  const context = useContext(StarterContext);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <div className="text-3xl sm:text-4xl text-center mt-8 font-extrabold">
        {context?.language == "ENG"
          ? "Welcome to ImpactFood"
          : "Benvenuto su ImpactFood"}
      </div>
      <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-2 px-6" />
      <div className="flex flex-col items-center my-4 text-xl sm:text-lg text-center font-bold">
        {context?.language == "ENG"
          ? "To start the test, click on the button below."
          : "Per iniziare il test, clicca sul pulsante qui sotto."}

        <button
          onClick={() => dispatch({ type: "toggleQuestionnaire" })}
          className={`px-4 py-2 w-24 rounded-xl tracking-wider my-auto mt-2 text-xl text-slate-900 hover:font-extrabold ${
            context?.darkMode
              ? " bg-green-200 hover:bg-green-300"
              : " bg-green-400 hover:bg-green-500"
          }`}
        >
          START
        </button>
      </div>
      <div
        className={`flex flex-col ${
          context?.toggleDocumentation ? "items-center" : null
        } w-[100%] h-auto sm:gap-y-10 text-lg sm:text-2xl`}
      >
        {context?.toggleDocumentation ? (
          <div className="text-justify text-black p-4 sm:w-2/3 bg-slate-100 rounded-xl">
            {context.documentation}
            <button
              onClick={() => dispatch({ type: "toggleDoc" })}
              className={`flex items-center px-4 py-2 w-auto rounded-xl tracking-wider my-auto mt-2 text-xl text-slate-900 hover:font-extrabold  ${
                context?.darkMode
                  ? " bg-green-200 hover:bg-green-300"
                  : " bg-green-400 hover:bg-green-500"
              }`}
            >
              {context.language == "ENG" ? "Back" : "Indietro"}{" "}
              <IoIosArrowBack />
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 mb-2 text-slate-900 font-extrabold">
              <button
                onClick={() => dispatch({ type: "toggleDoc", payload: "help" })}
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {context?.language == "ENG" ? "Help" : "Supporto"}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "toggleDoc", payload: "calculation" })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {context?.language == "ENG"
                  ? "Score calculation"
                  : "Calcolo punteggio"}
              </button>
            </div>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 text-slate-900 font-extrabold">
              <button
                onClick={() => dispatch({ type: "toggleDoc", payload: "why" })}
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {context?.language == "ENG" ? "Why do it?" : "Perchè farlo?"}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "toggleDoc", payload: "useful" })
                }
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                {context?.language == "ENG"
                  ? "Why is it useful?"
                  : "Perchè è utile?"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
