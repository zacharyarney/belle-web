import { ActionType } from '../context/actions.ts';
import { useTextContext } from '../hooks/useTextContext.ts';
import { usePlayText } from '../hooks/usePlayText.ts';

export default function Reader() {
  const { state, dispatch } = useTextContext();

  usePlayText(state, dispatch);

  const handlePlayText = () => dispatch({ type: ActionType.TogglePlayText });

  const playButtonText = state.isPlaying ? 'pause' : 'play';

  return (
    <>
      <p>{state.wordArray[state.textIndex]}</p>
      <button onClick={handlePlayText}>{playButtonText}</button>
    </>
  );
}
