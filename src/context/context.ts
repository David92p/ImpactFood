import { createContext } from "react";
import { GlobalState } from "../datatypes";

// const ACTIONS = {
//   DARK_MODE: "darkMode",
//   DOCUMENTATION: "documentation"
// }

type ActionType = "language" | "darkMode" | "documentation";
type Action = { type: ActionType, payload?: GlobalState}
type Dispatch = (action: Action) => void

export const StarterContext = createContext<GlobalState | undefined>(undefined)
export const DispatchContext = createContext<Dispatch>(() => null)

export const starterReducer = (state:GlobalState, action:Action) => {
  switch (action.type) {
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };
    case "documentation":
      return { ...state, toggleDocumentation: !state.toggleDocumentation }
    default:
      return state
  }
};

export const initialState:GlobalState= {
  language: true,
  darkMode: true,
  toggleDocumentation: false,
  documentation: "contenuto inserito qui",
  questionnaire: false
};




