import styled from 'styled-components';
import Common from 'components/common';
import React from 'react';
import { ButtonType } from 'types/common';

const Button = styled(Common.Button)`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: transparent;
  color: rgb(88, 102, 126);
  line-height: 1.5rem;

  &.active {
    background-color: white;
    color: black;
    border: 1px solid #eff2f5;
  }
`;

const ChartButton: React.FC<ButtonType> = ({
  className = '',
  type,
  onClick,
  children,
}) => {
  return (
    <Button className={className} type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ChartButton;
