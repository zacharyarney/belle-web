export enum ActionType {
  InputTextChange,
  SetText,
  TogglePlayText,
  GetNextWord,
  GetPrevWord,
  SetWpm,
}

export interface InputTextChange {
  type: ActionType.InputTextChange;
  payload: string;
}

export interface SetText {
  type: ActionType.SetText;
  payload: string;
}

export interface TogglePlayText {
  type: ActionType.TogglePlayText;
  payload: boolean;
}

export interface GetNextWord {
  type: ActionType.GetNextWord;
}

export interface GetPrevWord {
  type: ActionType.GetPrevWord;
}

export interface SetWpm {
  type: ActionType.SetWpm;
  payload: number;
}

export type BelleActions =
  | InputTextChange
  | SetText
  | TogglePlayText
  | GetNextWord
  | GetPrevWord
  | SetWpm;
