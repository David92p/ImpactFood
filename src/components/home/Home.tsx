import React, { useContext } from "react";

import logo from "../../assets/images/logo.jpg";

import { DispatchContext, StarterContext } from "../../context/context";

const Home: React.FC = () => {
  const context = useContext(StarterContext);
  const dispatch = useContext(DispatchContext)
  console.log(context);
  
  return (
    <>
      <div className="text-3xl sm:text-4xl text-center mt-8 font-extrabold">
        Benvenuto su ImpactFood
      </div>
      <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-2 px-6" />
      <div className="flex flex-col items-center my-4 text-xl sm:text-lg text-center font-bold">
        Per iniziare il test, clicca sul pulsante qui sotto.
        <button
          className={`px-4 py-2 w-24 rounded-xl tracking-wider my-auto mt-2 text-xl text-slate-900 hover:font-extrabold ${
            context?.darkMode
              ? " bg-green-200 hover:bg-green-300"
              : " bg-green-400 hover:bg-green-500"
          }`}
        >
          START
        </button>
      </div>
      <div className="flex flex-col w-[100%] h-full text-lg sm:text-2xl">
        {context?.toggleDocumentation ? (
         <div className="flex justify-center" >
            <div className="w-full sm:w-2/3 h-24 bg-white" onClick={() => dispatch({ type: "documentation" })}>{ context?.documentation }</div>
         </div>
        ) : (
          <>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 mb-2 text-slate-900 font-extrabold">
              <button
              onClick={() => dispatch({ type: "documentation" })}
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                Supporto
              </button>
              <button
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                Calcolo punteggio
              </button>
            </div>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 text-slate-900 font-extrabold">
              <button
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                Perchè farlo?
              </button>
              <button
                className={`w-1/2 sm:w-1/3 h-20 border-2 rounded-xl ${
                  context?.darkMode
                    ? "bg-green-200 hover:bg-green-300"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              >
                Perchè è utile?
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
