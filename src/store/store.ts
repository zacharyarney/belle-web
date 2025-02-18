import { create } from 'zustand';
import {
  DEFAULT_WPM,
  NEW_LINE_REGEX,
  WHITE_SPACE_REGEX,
} from '../util/constants.ts';
import { getMilliseconds } from '../util/getMilliseconds.ts';
import { devtools } from 'zustand/middleware';

export interface BelleState {
  text: string;
  textIndex: number;
  wordArray: string[];
  isPlaying: boolean;
  wordsPerMinute: number;
  millisecondsPerWord: number;
  setText: (payload: string) => void;
  setTextIndex: (payload: number) => void;
  setWordArray: (payload: string[]) => void;
  setIsPlaying: (payload: boolean) => void;
  setWordsPerMinute: (payload: number) => void;
}

export const useBelleStore = create<BelleState>()(
  devtools(
    set => ({
      text: '',
      textIndex: 0,
      wordArray: [],
      isPlaying: false,
      wordsPerMinute: DEFAULT_WPM,
      millisecondsPerWord: getMilliseconds(240),
      setText: (payload: string) => set(state => setTextState(state, payload)),
      setTextIndex: (payload: number) => set({ textIndex: payload }),
      setWordArray: (payload: string[]) => set({ wordArray: payload }),
      setIsPlaying: (payload: boolean) => set({ isPlaying: payload }),
      setWordsPerMinute: (payload: number) =>
        set({
          wordsPerMinute: payload,
          millisecondsPerWord: getMilliseconds(payload),
        }),
    }),
    { name: 'Belle Store' }
  )
);

function setTextState(state: BelleState, payload: string) {
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
