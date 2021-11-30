import styled from 'styled-components';

export type RowType = {
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
  full?: boolean;
  className?: string;
};

const RowElement = styled.div<RowType>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => (props.full ? '100%' : 'auto')};
`;

const Row: React.FC<RowType> = ({
  children,
  className,
  full = false,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
}) => {
  return (
    <RowElement
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
      full={full}
    >
      {children}
    </RowElement>
  );
};

export default Row;
