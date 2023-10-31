interface Checked {
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
  checked4: boolean;
}

interface RegisterAnswer {
  question_number: number;
  answers: Checked;
}

interface AnswerResults {
  corrects: number[];
  incorrects: number[];
  register: RegisterAnswer[];
}

export type { Checked, RegisterAnswer, AnswerResults };
