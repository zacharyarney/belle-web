import { ActionType } from '../context/actions.ts';
import { useTextContext } from '../hooks/useTextContext.ts';
import Button from './Button.tsx';

export default function TextBox() {
  const { state, dispatch } = useTextContext();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({ type: ActionType.InputTextChange, payload: e.target.value });

  const handleSetText = () =>
    dispatch({ type: ActionType.SetText, payload: state.inputText });

  return (
    <div className="w-full flex flex-col space-y-4">
      <textarea
        className="resize-none p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={state.inputText}
        placeholder={'Type or paste the text you want to read'}
        onChange={handleInput}
      ></textarea>
      <Button onClick={handleSetText}>queue text</Button>
    </div>
  );
}
