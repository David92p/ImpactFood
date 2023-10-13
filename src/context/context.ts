import { createContext } from "react";
import { GlobalState, Documentations } from "../datatypes";

// const ACTIONS = {
//   DARK_MODE: "darkMode",
//   DOCUMENTATION: "documentation"
// }

type ActionType = "language" | "darkMode" | "toggleDoc" | "questionnaire";
// type Payload = {value:}
type Action = { type: ActionType; payload?: string };
type Dispatch = (action: Action) => void;

export const StarterContext = createContext<GlobalState | undefined>(undefined);
export const DispatchContext = createContext<Dispatch>(() => null);

export const starterReducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case "language":
      return { ...state, language: action.payload };
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };
    case "toggleDoc":
      if (action.payload == "help") {
        return {
          ...state,
          toggleDocumentation: !state.toggleDocumentation,
          documentation:
            state.language == "ENG"
              ? DOCUMENTATIONS.helpENG
              : DOCUMENTATIONS.helpITA,
        };
      } else if (action.payload == "calculation") {
        return {
          ...state,
          toggleDocumentation: !state.toggleDocumentation,
          documentation:
            state.language == "ENG"
              ? DOCUMENTATIONS.scoreCalculationENG
              : DOCUMENTATIONS.scoreCalculationITA,
        };
      } else if (action.payload == "why") {
        return {
          ...state,
          toggleDocumentation: !state.toggleDocumentation,
          documentation:
            state.language == "ENG"
              ? DOCUMENTATIONS.reasonENG
              : DOCUMENTATIONS.reasonITA,
        };
      } else if (action.payload == "useful") {
        return {
          ...state,
          toggleDocumentation: !state.toggleDocumentation,
          documentation:
            state.language == "ENG"
              ? DOCUMENTATIONS.usefulENG
              : DOCUMENTATIONS.usefulITA,
        };
      } else {
        return {
          ...state,
          toggleDocumentation: !state.toggleDocumentation,
        };
      }
    case "questionnaire":
      return { ...state, toggleQuestionnaire: !state.toggleQuestionnaire };
    default:
      return state;
  }
};

const DOCUMENTATIONS: Documentations = {
  helpENG:
    "Start by clicking on the START button, the test is made up of 10 questions with 4 possible answers per question. Only one answer is the correct answer. Calculate your total score once the test is finished.",
  helpITA:
    "Inizia cliccando sul bottone START, il test è fatto di 10 domande con 4 possibili risposte per domanda. Una sola risposta è la risposta corretta. Calcola il tuo punteggio totale una volta terminato il test.",
  scoreCalculationENG:
    "The score is calculated based on your answers. Each correct answer gives you 1 point up to a maximum of 10. 1 to 4 points is a low score. 5 to 7 points is an average score. 8 to10 points is a high score.",
  scoreCalculationITA:
    "Il punteggio viene calcolato in base alle tue risposte. Ogni risposta corretta ti aggiudica 1 punto fino ad un massimo di 10. Da 1 a 4 punti è uno score basso. Da 5 a 7 punti è uno score medio. Da 8 a 10 punti è uno score alto.",
  reasonENG:
    "This test helps us understand the knowledge about food and the interest that people have in its impact on the planet.",
  reasonITA:
    "Questo test ci aiuta a capire le conoscenze sul cibo e sull'interesse che le persone hanno nei confronti dell'impatto sul pianeta.",
  usefulENG:
    "This test helps you understand and improve your knowledge about food and the impact it has on our planet.",
  usefulITA:
    "Questo test ti aiuta a capire e migliorare le tue conoscenze sul cibo e l'impatto che esso ha sul nostro pianeta.",
};

export const initialState: GlobalState = {
  language: "ENG",
  darkMode: true,
  toggleDocumentation: false,
  documentation: "",
  toggleQuestionnaire: false,
};
