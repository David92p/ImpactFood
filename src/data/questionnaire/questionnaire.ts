import { StateQuestionnaire } from "../../datatypes";
import { QUESTIONS_ENG, QUESTIONS_ITA } from "../questions/questions";


export const QUESTIONNAIRE_ITA: StateQuestionnaire = {
    title: "Domanda N° ",
    counterQuestions: 1,
    index: 0,
    questions: QUESTIONS_ITA,
};

export const QUESTIONNAIRE_ENG: StateQuestionnaire = {
    title: "Question N° ",
    counterQuestions: 1,
    index: 0,
    questions: QUESTIONS_ENG,
};
