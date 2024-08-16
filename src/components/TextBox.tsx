import Button from './Button.tsx';
import { useBelleStore } from '../store/store.ts';
import { useRef } from 'react';

export default function TextBox() {
  const setText = useBelleStore(state => state.setText);
  const inputTextRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSetText = () => setText(inputTextRef.current?.value ?? '');

  return (
    <div className="w-full flex flex-col space-y-4">
      <textarea
        ref={inputTextRef}
        className="resize-none p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={'Type or paste the text you want to read'}
      ></textarea>
      <Button onClick={handleSetText}>queue text</Button>
    </div>
  );
}
