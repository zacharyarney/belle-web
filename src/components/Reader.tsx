import { ActionType } from '../context/actions.ts';
import { useTextContext } from '../hooks/useTextContext.ts';
import { usePlayText } from '../hooks/usePlayText.ts';
import Button from './Button.tsx';
import WpmSelector from './WpmSelector.tsx';

export default function Reader() {
  const { state, dispatch } = useTextContext();

  usePlayText(state, dispatch);

  const handlePlayText = () => dispatch({ type: ActionType.TogglePlayText });

  const currentWord = state.wordArray[state.textIndex] ? (
    <p className="text-xl">{state.wordArray[state.textIndex]}</p>
  ) : (
    <p className="text-xl">&nbsp;</p>
  );
  const playButtonText = state.isPlaying ? 'pause' : 'play';

  return (
    <div className="w-full flex flex-wrap justify-between space-y-4">
      <div className="w-full border-neutral-200 border-2 rounded py-14">
        {currentWord}
      </div>
      <Button onClick={handlePlayText}>{playButtonText}</Button>
      <WpmSelector />
    </div>
  );
}
