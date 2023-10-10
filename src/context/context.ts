import { createContext } from "react";

export const initialState = {
  language: true,
  darkMode: true,
};

const AppContext = createContext(initialState);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "darkMode":
//       return { ...state, language: !state.language };
//   }

//   console.log(state);
// };

export { AppContext };
