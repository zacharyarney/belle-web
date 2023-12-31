import { useEffect } from 'react';
import { END_OF_SENTENCE_REGEX } from '../util/constants.ts';
import { useBelleStore } from '../store/store.ts';

export function usePlayText() {
  const state = useBelleStore();

  useEffect(() => {
    const currentWord = state.wordArray[state.textIndex];
    const isEndOfSentence = END_OF_SENTENCE_REGEX.test(currentWord);
    const shouldPause = state.wordsPerMinute > 120 && isEndOfSentence;
    const intervalTime = shouldPause
      ? state.millisecondsPerWord * 2
      : state.millisecondsPerWord;
    const interval = setInterval(() => {
      if (state.isPlaying && state.textIndex < state.wordArray.length) {
        state.setTextIndex(state.textIndex + 1);
      } else if (state.isPlaying && state.textIndex >= state.wordArray.length) {
        state.setIsPlaying(!state.isPlaying);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [
    state.isPlaying,
    state.millisecondsPerWord,
    state.textIndex,
    state.wordArray,
    state.wordArray.length,
    state.wordsPerMinute,
  ]);
}
