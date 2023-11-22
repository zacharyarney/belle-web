import { ActionType } from '../context/actions';
import { useTextContext } from '../hooks/useTextContext';

export default function TextBox() {
  const { state, dispatch } = useTextContext();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({ type: ActionType.InputTextChange, payload: e.target.value });

  const handleSetText = () =>
    dispatch({ type: ActionType.SetText, payload: state.inputText });

  return (
    <>
      <textarea value={state.inputText} onChange={handleInput}></textarea>
      <button onClick={handleSetText}>queue text</button>
    </>
  );
}
