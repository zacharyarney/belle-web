import { getMilliseconds } from '../util/getMilliseconds';

export interface BelleState {
  text: string;
  inputText: string;
  textIndex: number;
  wordArray: string[];
  isPlaying: boolean;
  wordsPerMinute: number;
  millisecondsPerWord: number;
}

export const initialBelleState: BelleState = {
  text: '',
  inputText: '',
  textIndex: 0,
  wordArray: [],
  isPlaying: false,
  wordsPerMinute: 240,
  millisecondsPerWord: getMilliseconds(240),
};
