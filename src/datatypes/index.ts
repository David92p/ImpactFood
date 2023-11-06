//GLOBAL STATE
import StateGlobal from "./stateGlobal/stateGlobal";

//HOME COMPONENT
import StateHome from "./home/stateHome";

//QUESIONNAIRE COMPONENT
import StateQuestionnaire from "./questionnaire/stateQuestionnaire";
import QuestionType from "./questionnaire/QuestionType";
import Register from "./questionnaire/register";
import {
  Checked,
  RegisterAnswer,
  AnswerResults,
} from "./questionnaire/answers";
import ResultType from "./questionnaire/resultType";

//ALERT
import AlertType from "./alert/alertType";

export type {
  StateGlobal,
  StateHome,
  StateQuestionnaire,
  QuestionType,
  Register,
  Checked,
  RegisterAnswer,
  AnswerResults,
  ResultType,
  AlertType,
};
