import React, { useContext } from 'react'

import logo from "../../assets/images/logo.jpg";

import { AppContext } from '../../context/context';

const Home:React.FC = () => {

  const context = useContext(AppContext)
  return (
    <>
      <div className={`text-3xl sm:text-4xl text-center font-medium mt-2 ${context.state.darkMode ? null : "font-extrabold"}`}>
          Benvenuto su ImpactFood
        </div>
        <img src={logo} alt="logo" className="w-auto sm:w-1/2 mt-2 px-6" />
        <div className="flex flex-col items-center my-4 text-xl sm:text-lg text-center">
          Per iniziare il test, clicca sul pulsante qui sotto.
          <button className="btn my-auto mt-2 text-xl ">START</button>
        </div>
        <div className="flex flex-col w-[100%] h-full text-lg sm:text-2xl">
          {context.state.documentation ? (
            <div className="w-[100%] h-auto">
              Contenuto testo bottone{" "}
            </div>
          ) : (
            <>
              <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 mb-2">
                <button
                  className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                  
                >
                  Supporto
                </button>
                <button
                  className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                  
                >
                  Calcolo punteggio
                </button>
              </div>
              <div className="flex justify-center h-1/2 sm:h-1/3 gap-x-3 ">
                <button
                  className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                 
                >
                  Perchè farlo?
                </button>
                <button
                  className="w-1/2 sm:w-1/3 h-20 border-2 rounded-xl hover:bg-slate-200 hover:text-slate-800"
                  
                >
                  Perchè è utile?
                </button>
              </div>
            </>
          )}
        </div>
      </>
  )
}

export default Home
