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
    <div className="text-xl flex flex-col items-start">
      <p>
        <span className="text-red-400">
          {wordArray[textIndex].substring(
            0,
            Math.min(3, Math.ceil(wordArray[textIndex].length / 2))
          )}
        </span>
        <span>
          {wordArray[textIndex].substring(
            Math.min(3, Math.ceil(wordArray[textIndex].length / 2))
          )}
        </span>
      </p>
      <p className="text-red-400">^</p>
    </div>
  ) : (
    <div className="text-xl flex flex-col items-start">
      <p className="text-xl">&nbsp;</p>
      <p className="text-xl">&nbsp;</p>
    </div>
  );
  const playButtonText = isPlaying ? 'pause' : 'play';

  return (
    <div className="w-full flex flex-wrap justify-between space-y-4">
      <div className="w-full border-neutral-200 border-2 rounded pt-14 pb-7 px-28">
        {currentWord}
      </div>
      <Button onClick={handlePlayText}>{playButtonText}</Button>
      <WpmSelector />
    </div>
  );
}
