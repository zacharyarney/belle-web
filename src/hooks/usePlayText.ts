import React, { useEffect } from 'react';
import { BelleState } from '../context/state.ts';
import { ActionType, BelleActions } from '../context/actions.ts';
import { END_OF_SENTENCE_REGEX } from '../util/constants.ts';

export function usePlayText(
  state: BelleState,
  dispatch: React.Dispatch<BelleActions>
) {
  useEffect(() => {
    const currentWord = state.wordArray[state.textIndex];
    const isEndOfSentence = END_OF_SENTENCE_REGEX.test(currentWord);
    const shouldPause = state.wordsPerMinute > 120 && isEndOfSentence;
    const intervalTime = shouldPause
      ? state.millisecondsPerWord * 2
      : state.millisecondsPerWord;
    const interval = setInterval(() => {
      if (state.isPlaying && state.textIndex < state.wordArray.length) {
        dispatch({ type: ActionType.GetNextWord });
      } else if (state.isPlaying && state.textIndex >= state.wordArray.length) {
        dispatch({ type: ActionType.TogglePlayText });
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [
    dispatch,
    state.isPlaying,
    state.millisecondsPerWord,
    state.textIndex,
    state.wordArray,
    state.wordArray.length,
    state.wordsPerMinute,
  ]);
}
