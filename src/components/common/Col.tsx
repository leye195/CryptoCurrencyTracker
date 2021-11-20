import styled from 'styled-components';

type ColumnType = {
  className?: string;
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
};

const ColumnElement = styled.div<ColumnType>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

const Col: React.FC<ColumnType> = ({
  children,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  className = '',
}) => {
  return (
    <ColumnElement
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </ColumnElement>
  );
};

export default Col;
