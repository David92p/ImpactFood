import { createContext } from "react";
import { GlobalState } from "../datatypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state
  }
};

export const initialState:GlobalState = {
  language: true,
  darkMode: true,
  documentation: false
};

export const AppContext = createContext(initialState)


