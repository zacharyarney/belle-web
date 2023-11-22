import { ActionType, BelleActions } from '../context/actions.ts';
import { BelleState } from '../context/state.ts';
import { getMilliseconds } from '../util/getMilliseconds.ts';
import { NEW_LINE_REGEX, WHITE_SPACE_REGEX } from '../util/constants.ts';

function setText(state: BelleState, payload: string) {
  const noNewLines: string = payload.replace(NEW_LINE_REGEX, ' \u00B6 '); // replaces newlines with pilcrow
  const wordArray: string[] = noNewLines.split(WHITE_SPACE_REGEX);

  return {
    ...state,
    text: payload,
    inputText: payload,
    textIndex: 0,
    isPlaying: false,
    wordArray,
  };
}

function playText(state: BelleState) {
  return { ...state, isPlaying: !state.isPlaying };
}

function getNextWord(state: BelleState) {
  return { ...state, textIndex: state.textIndex++ };
}

function setWpm(state: BelleState, payload: number) {
  return {
    ...state,
    wordsPerMinute: payload,
    millisecondsPerWord: getMilliseconds(payload),
  };
}

export function belleReducer(
  state: BelleState,
  action: BelleActions
): BelleState {
  switch (action.type) {
    case ActionType.InputTextChange:
      return { ...state, inputText: action.payload };
    case ActionType.SetText:
      return setText(state, action.payload);
    case ActionType.TogglePlayText:
      return playText(state);
    case ActionType.GetNextWord:
      return getNextWord(state);
    case ActionType.SetWpm:
      return setWpm(state, action.payload);
    default:
      return state;
  }
}
