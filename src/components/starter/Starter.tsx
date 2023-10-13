import React, { useReducer } from "react";
import { Header, Home, Questionnaire } from "..";
import {
  StarterContext,
  DispatchContext,
  initialState,
  starterReducer,
} from "../../context/context";

const Starter: React.FC = () => {
  const [state, dispatch] = useReducer(starterReducer, initialState);

  return (
    <StarterContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div
          className={`flex justify-center min-h-screen ${
            state.darkMode ? "bg-slate-900" : "bg-green-100"
          } py-10`}
        >
          <div
            className={`flex flex-col items-center ${
              state?.darkMode ? "text-slate-300" : "text-slate-900"
            } sm:w-[50%] mx-4 tracking-wider"`}
          >
            <Header />
            {state.toggleQuestionnaire ? <Questionnaire /> : <Home />}
          </div>
        </div>
      </DispatchContext.Provider>
    </StarterContext.Provider>
  );
};

export default Starter;
