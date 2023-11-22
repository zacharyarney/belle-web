import { useEffect } from 'react';
import { BelleState } from '../context/state';
import { ActionType, BelleActions } from '../context/actions';

export function usePlayText(
  state: BelleState,
  dispatch: React.Dispatch<BelleActions>
) {
  useEffect(() => {
    setTimeout(() => {
      if (state.isPlaying && state.textIndex < state.wordArray.length) {
        dispatch({ type: ActionType.GetNextWord });
      } else if (state.isPlaying && state.textIndex >= state.wordArray.length) {
        dispatch({
          type: ActionType.TogglePlayText,
          payload: !state.isPlaying,
        });
      }
    }, state.millisecondsPerWord);

    return () => clearTimeout(state.millisecondsPerWord);
  }, [
    dispatch,
    state.isPlaying,
    state.millisecondsPerWord,
    state.textIndex,
    state.wordArray,
    state.wordArray.length,
  ]);
}
