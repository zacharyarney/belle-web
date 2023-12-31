export enum ActionType {
  InputTextChange = 'InputTextChange',
  SetText = 'SetText',
  TogglePlayText = 'TogglePlayText',
  GetNextWord = 'GetNextWord',
  GetPrevWord = 'GetPrevWord',
  SetWpm = 'SetWpm',
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
