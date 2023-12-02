import { ActionType } from '../context/actions.ts';
import { useTextContext } from '../hooks/useTextContext.ts';
import { usePlayText } from '../hooks/usePlayText.ts';
import Button from './Button.tsx';

export default function Reader() {
  const { state, dispatch } = useTextContext();

  usePlayText(state, dispatch);

  const handlePlayText = () => dispatch({ type: ActionType.TogglePlayText });

  const playButtonText = state.isPlaying ? 'pause' : 'play';

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="border-neutral-200 border-2 rounded py-14">
        <p className="text-xl">{state.wordArray[state.textIndex]}</p>
      </div>
      <Button onClick={handlePlayText}>{playButtonText}</Button>
    </div>
  );
}
