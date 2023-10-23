import { QuestionType } from "..";

type Title = "Domanda N° " | "Question N° ";

interface StateQuestionnaire {
  title: Title;
  counterQuestions: number;
  questions: QuestionType[];
}

export default StateQuestionnaire;
