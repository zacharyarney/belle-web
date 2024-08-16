import { useBelleStore } from '../store/store.ts';

export default function ReaderDisplay() {
  const wordArray = useBelleStore(state => state.wordArray);
  const textIndex = useBelleStore(state => state.textIndex);

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
  return (
    <div className="w-full border-neutral-200 border-2 rounded pt-14 pb-7 pl-7 md:pl-28">
      {currentWord}
    </div>
  );
}
