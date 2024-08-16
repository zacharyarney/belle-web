import { usePlayText } from '../hooks/usePlayText.ts';
import Button from './Button.tsx';
import SmallButton from './SmallButton.tsx';
import WpmSelector from './WpmSelector.tsx';
import { useBelleStore } from '../store/store.ts';
import ReaderDisplay from './ReaderDisplay.tsx';

export default function Reader() {
  const wordArray = useBelleStore(state => state.wordArray);
  const textIndex = useBelleStore(state => state.textIndex);
  const isPlaying = useBelleStore(state => state.isPlaying);
  const setIsPlaying = useBelleStore(state => state.setIsPlaying);
  const setTextIndex = useBelleStore(state => state.setTextIndex);

  usePlayText();

  const handlePlayText = () => setIsPlaying(!isPlaying);
  const handlePrevWord = () => {
    if (textIndex > 0) {
      setTextIndex(textIndex - 1);
    }
  };
  const handleNextWord = () => {
    if (textIndex < wordArray.length - 1) {
      setTextIndex(textIndex + 1);
    }
  };

  const playButtonText = isPlaying ? 'pause' : 'play';

  return (
    <div className="w-full flex flex-wrap justify-between space-y-4">
      <ReaderDisplay />
      <Button onClick={handlePlayText}>{playButtonText}</Button>
      <SmallButton onClick={handlePrevWord}>{'<'}</SmallButton>
      <SmallButton onClick={handleNextWord}>{'>'}</SmallButton>
      <WpmSelector />
    </div>
  );
}
