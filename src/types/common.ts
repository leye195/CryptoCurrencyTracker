import { MouseEvent } from 'react';

export type ButtonType = {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
};
