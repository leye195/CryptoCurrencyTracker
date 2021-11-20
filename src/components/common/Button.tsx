import React, { MouseEvent } from 'react';

type Props = {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({
  className = '',
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
