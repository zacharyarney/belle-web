import { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: () => void;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="font-mono max-h-10 w-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
