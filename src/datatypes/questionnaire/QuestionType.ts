// import { AnswerResults } from "..";

import { Checked, RegisterAnswer } from "..";

interface QuestionType {
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;

  // data from Questionnaire
  counterQuestion?: number;
  alert?: boolean;
  register?: RegisterAnswer[];
  checkAnswers?: (
    cheeks: Checked,
    correctAnswer: number,
    answer: number
  ) => void;
  id?: string
}

export default QuestionType;
