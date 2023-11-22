import { ActionType } from '../context/actions';
import { useTextContext } from '../hooks/useTextContext';
import { WPM_OPTIONS } from '../util/constants';

export default function WpmSelector() {
  const { state, dispatch } = useTextContext();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: ActionType.SetWpm, payload: Number(e.target.value) });
  };

  const wpmOptions = (options: number[]) =>
    options.map(option => <option value={option}>{option} wpm</option>);

  return (
    <select value={state.wordsPerMinute} onChange={handleSelect}>
      {wpmOptions(WPM_OPTIONS)}
    </select>
  );
}
