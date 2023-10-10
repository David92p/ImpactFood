import React, { useState, useReducer } from "react";

import logo from "../../assets/images/logo.jpg";
import en from "../../assets/images/en.png";
import it from "../../assets/images/it.png";
import { BsSun, BsMoon } from "react-icons/bs";
import { initialState, reducer } from "../../context/context";

const Starter: React.FC = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center text-white sm:w-[50%] mx-4 tracking-wider">
      <div className="flex justify-between px-4 gap-10 w-[100%]">
        <div className="flex gap-4">
          <img
            src={en}
            alt="english"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          />
          <img
            src={it}
            alt="italian"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          />
        </div>
        <label className="bg-slate-300 relative w-16 h-8 rounded-full">
          <input
            // onClick={() => dispatch({ type: "darkMode" })}
            type="checkbox"
            className="sr-only peer "
          />
          <span className="flex justify-center items-center w-2/5 h-4/5 bg-slate-900 absolute rounded-full left-1 top-1 cursor-pointer peer-checked:bg-slate-200 peer-checked:left-8 transition-all duration-500">
            {toggle ? <BsMoon /> : <BsSun color={"black"} />}
          </span>
        </label>
      </div>

      <div className="text-3xl sm:text-4xl text-center font-medium mt-2">
        Benvenuto su ImpactFood
      </div>
      <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-2 px-6" />
      <div className="flex flex-col items-center mt-4 px-4 text-xl sm:text-lg text-center">
        Per iniziare il test, clicca sul pulsante qui sotto.
        <button className="btn mt-6 text-xl ">START</button>
      </div>
      <div className="flex flex-col w-[100%] h-full mt-8 my-auto text-lg sm:text-2xl">
        {toggle ? (
          <div className="w-[100%] h-auto" onClick={() => setToggle(!toggle)}>
            Contenuto testo bottone{" "}
          </div>
        ) : (
          <>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 mb-2">
              <button
                className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                onClick={() => setToggle(!toggle)}
              >
                Supporto
              </button>
              <button
                className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                onClick={() => setToggle(!toggle)}
              >
                Calcolo punteggio
              </button>
            </div>
            <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 ">
              <button
                className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                onClick={() => setToggle(!toggle)}
              >
                Perchè farlo?
              </button>
              <button
                className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                onClick={() => setToggle(!toggle)}
              >
                Perchè è utile?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Starter;
