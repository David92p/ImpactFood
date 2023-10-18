import { createContext } from "react";
import { StateGlobal } from "../datatypes";

type ActionType = "language" | "darkMode" | "toggleQuestionnaire";

type Action = { type: ActionType; payload?: string };
type Dispatch = (action: Action) => void;

export const initialState: StateGlobal = {
  language: "ENG",
  darkMode: true,
  start: false,
};

export const CONTEXT = createContext<StateGlobal>(initialState);
export const DISPATCH = createContext<Dispatch>(() => null);

export const Reducer = (state: StateGlobal, action: Action) => {
  switch (action.type) {
    case "language":
      return {
        ...state,
        language: action.payload == "ENG" ? "ENG" : "ITA",
      };
    case "darkMode":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "toggleQuestionnaire":
      return {
        ...state,
        start: !state.start,
      };
    default:
      return state;
  }
};
