interface QuestionType {
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  alert?: boolean;
}

export default QuestionType;
