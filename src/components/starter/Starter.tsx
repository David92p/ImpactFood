import React, { useReducer } from "react";
import { Header, Home, Questonary } from "..";
import { AppContext, initialState, reducer } from "../../context/context";


const Starter:React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch: dispatch}}>
      <div className={`flex justify-center min-h-screen ${state.darkMode ? "bg-slate-900" : "bg-gray-300"} py-10`}>
        <div  className={`flex flex-col items-center ${state.darkMode ? "text-white" : "text-black font-extrabold"} sm:w-[50%] mx-4 tracking-wider`}>
          <Header/>
          { state.questonary ? <Questonary/> : <Home/> }
        </div>
      </div>
      
    </AppContext.Provider>
  );
};

export default Starter;
