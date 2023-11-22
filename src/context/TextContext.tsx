import { createContext, ReactNode, useReducer } from 'react';
import { BelleState, initialBelleState } from './state.ts';
import { belleReducer } from '../reducers/textReducer.ts';
import { BelleActions } from './actions.ts';

interface TextProviderProps {
  children: ReactNode;
}

interface TextProviderValue {
  state: BelleState;
  dispatch: React.Dispatch<BelleActions>;
}

export const TextContext = createContext<TextProviderValue>({
  state: initialBelleState,
  dispatch: () => null,
});

export function TextProvider({ children }: TextProviderProps) {
  const [state, dispatch] = useReducer(belleReducer, initialBelleState);

  return (
    <TextContext.Provider value={{ state, dispatch }}>
      {children}
    </TextContext.Provider>
  );
}
