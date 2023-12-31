import { usePlayText } from '../hooks/usePlayText.ts';
import Button from './Button.tsx';
import WpmSelector from './WpmSelector.tsx';
import { useBelleStore } from '../store/store.ts';

export default function Reader() {
  const wordArray = useBelleStore(state => state.wordArray);
  const textIndex = useBelleStore(state => state.textIndex);
  const isPlaying = useBelleStore(state => state.isPlaying);
  const setIsPlaying = useBelleStore(state => state.setIsPlaying);

  usePlayText();

  const handlePlayText = () => setIsPlaying(!isPlaying);

  const currentWord = wordArray[textIndex] ? (
    <p className="text-xl">{wordArray[textIndex]}</p>
  ) : (
    <p className="text-xl">&nbsp;</p>
  );
  const playButtonText = isPlaying ? 'pause' : 'play';

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
