import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { usePlayText } from '../hooks/usePlayText.ts';
import Button from './Button.tsx';
import SmallButton from './SmallButton.tsx';
import WpmSelector from './WpmSelector.tsx';
import { useBelleStore } from '../store/store.ts';
import ReaderDisplay from './ReaderDisplay.tsx';

export default function Reader() {
  const { wordArray, textIndex, isPlaying, setIsPlaying, setTextIndex } =
    useBelleStore(useShallow(state => state));

  usePlayText();

  const handlePlayText = useCallback(
    () => setIsPlaying(!isPlaying),
    [isPlaying, setIsPlaying]
  );
  const handlePrevWord = useCallback(() => {
    if (textIndex > 0) {
      setTextIndex(textIndex - 1);
    }
  }, [textIndex, setTextIndex]);
  const handleNextWord = useCallback(() => {
    if (textIndex < wordArray.length - 1) {
      setTextIndex(textIndex + 1);
    }
  }, [textIndex, setTextIndex]);

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
