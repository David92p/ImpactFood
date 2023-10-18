import React, { useReducer } from "react";
import { initialState, CONTEXT, DISPATCH, Reducer } from "../../context";
import { Header, Home, Questionnaire } from "..";

const Starter: React.FC = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CONTEXT.Provider value={state}>
      <DISPATCH.Provider value={dispatch}>
        <div
          className={`flex justify-center min-h-screen ${
            state.darkMode ? "bg-slate-900" : "bg-green-100"
          } py-4`}
        >
          <div
            className={`flex flex-col items-center ${
              state?.darkMode ? "text-slate-300" : "text-slate-900"
            } sm:w-[50%] w-[100%] tracking-wider"`}
          >
            <Header />
            {state.start ? <Questionnaire /> : <Home />}
          </div>
        </div>
      </DISPATCH.Provider>
    </CONTEXT.Provider>
  );
};

export default Starter;
