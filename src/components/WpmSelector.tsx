import { WPM_OPTIONS } from '../util/constants.ts';
import React from 'react';
import { useBelleStore } from '../store/store.ts';

export default function WpmSelector() {
  const wordsPerMinute = useBelleStore(state => state.wordsPerMinute);
  const setWordsPerMinute = useBelleStore(state => state.setWordsPerMinute);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWordsPerMinute(Number(e.target.value));
  };

  const wpmOptions = (options: number[]) =>
    options.map(option => (
      <option key={option} value={option}>
        {option} wpm
      </option>
    ));

  return (
    <div className="relative w-64 text-neutral-950">
      <select
        id="wpm"
        className="appearance-none w-full h-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={wordsPerMinute}
        onChange={handleSelect}
      >
        {wpmOptions(WPM_OPTIONS)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
