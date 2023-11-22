import { useContext } from "react";
import { TextContext} from '../context/TextContext'

export function useTextContext() {
  return useContext(TextContext);
}
