export interface Option {
  e: string; // Emoji
  t: string; // Option text
  v: string; // Option value
}

export interface Question {
  n: string; // Label e.g. "Pergunta 1 de 5"
  q: string; // Question title
  key: string; // Identification key e.g. "idade"
  opts: Option[];
}

export interface ResultInfo {
  tag: string;
  phase: string;
  lead: string;
  warn: string;
}

export interface Answers {
  idade?: string;
  dor?: string;
  fonte?: string;
  emocao?: string;
  desejo?: string;
  [key: string]: string | undefined;
}
