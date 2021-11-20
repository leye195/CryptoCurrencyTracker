type Props = {
  className?: string;
};

const ButtonGroup: React.FC<Props> = ({ className = '', children }) => {
  return <div className={className}>{children}</div>;
};

export default ButtonGroup;
