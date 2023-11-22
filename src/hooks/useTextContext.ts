import { useContext } from 'react';
import { TextContext } from '../context/TextContext.tsx';

export function useTextContext() {
  return useContext(TextContext);
}
