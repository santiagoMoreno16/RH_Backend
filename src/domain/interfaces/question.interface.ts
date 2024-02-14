interface Option {
  a: string;
  b: string;
  c: string;
  d?: string;
}

interface Question {
  question: string;
  options: Option;
  answer: string;
}

export {Option, Question}