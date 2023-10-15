import React, { useContext } from 'react'
import { Question } from '..'
import { DispatchContext, StarterContext } from '../../context/context';
import { IoIosArrowBack } from 'react-icons/io';

const Questionnaire:React.FC = () => {

  const context = useContext(StarterContext);
  const dispatch = useContext(DispatchContext);
  


  return (
    <>
      <div className="flex items-center justify-between w-[100%] text-4xl sm:text-4xl mt-14 font-extrabold">{context?.language == "ENG"
        ? "Question"
        : "Domanda"} N° 1
        <button
          onClick={() => dispatch({ type: "toggleDoc" })}
          className={`flex items-center px-3 py-2 h-10 sm:h-auto w-auto rounded-xl tracking-wider text-base sm:text-xl text-slate-900 hover:font-extrabold  ${
          context?.darkMode
            ? " bg-green-200 hover:bg-green-300"
            : " bg-green-400 hover:bg-green-500"
          }`}
        >
          Home
          <IoIosArrowBack />
        </button>
      </div>
      <Question/>
    </>
  )
}

export default Questionnaire
