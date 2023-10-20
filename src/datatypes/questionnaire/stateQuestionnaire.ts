import { QuestionType } from "..";

type Title = "Domanda N° " | "Question N° ";
type CounterQuestions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface StateQuestionnaire {
  title: Title;
  counterQuestions: CounterQuestions;
  index: Index;
  questions: QuestionType[];
}

export default StateQuestionnaire;
