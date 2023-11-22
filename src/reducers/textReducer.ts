import { ActionType, BelleActions } from '../context/actions';
import { BelleState } from '../context/state';
import { getMilliseconds } from '../util/getMilliseconds';

function setText(state: BelleState, payload: string) {
  const noNewLines: string = payload.replace(/(?:\r\n|\r|\n)/g, ' \u00B6 ');
  const wordArray: string[] = noNewLines.split(/(?:\s+)/g);

  return {
    ...state,
    text: payload,
    inputText: payload,
    textIndex: 0,
    isPlaying: false,
    wordArray,
  };
}

function playText(state: BelleState, payload: boolean) {
  return { ...state, isPlaying: payload };
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
      return playText(state, action.payload);
    case ActionType.GetNextWord:
      return getNextWord(state);
    case ActionType.SetWpm:
      return setWpm(state, action.payload);
    default:
      return state;
  }
}
