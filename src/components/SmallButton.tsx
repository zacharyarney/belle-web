import { PropsWithChildren } from 'react';

interface SmallButtonProps {
  onClick: () => void;
}

export default function SmallButton(
  props: PropsWithChildren<SmallButtonProps>
) {
  return (
    <button
      className="font-mono w-22 bg-neutral-500 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
