//GLOBAL STATE
import StateGlobal from "./stateGlobal/stateGlobal";

//HOME COMPONENT
import StateHome from "./home/stateHome";

//QUESIONNAIRE COMPONENT
import StateQuestionnaire from "./questionnaire/stateQuestionnaire";
import QuestionType from "./questionnaire/questionType";
import Register from "./questionnaire/register";
import {
  Checked,
  RegisterAnswer,
  AnswerResults,
} from "./questionnaire/answers";

export type {
  StateGlobal,
  StateHome,
  StateQuestionnaire,
  QuestionType,
  Register,
  Checked,
  RegisterAnswer,
  AnswerResults,
};
