import { ActionType } from '../context/actions';
import { useTextContext } from '../hooks/useTextContext';
import { usePlayText } from '../hooks/usePlayText';

export default function Reader() {
  const { state, dispatch } = useTextContext();

  usePlayText(state, dispatch);

  const handlePlayText = () =>
    dispatch({ type: ActionType.TogglePlayText, payload: !state.isPlaying });

  const playButtonText = state.isPlaying ? 'pause' : 'play';

  return (
    <>
      <p>{state.wordArray[state.textIndex]}</p>
      <button onClick={handlePlayText}>{playButtonText}</button>
    </>
  );
}
