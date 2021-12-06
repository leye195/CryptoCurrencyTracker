import styled from 'styled-components';
import { MdArrowUpward } from 'react-icons/md';
import Common from 'components/common';

const Button = styled(Common.Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1 px solid #2e2e2e42;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  bottom: 5%;
  right: 3%;
  color: rgb(88, 102, 126);
  box-shadow: 0px 0px 3px 0px #000000cc;
`;

const ToTopButton = () => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button type="button" onClick={handleToTop}>
      <MdArrowUpward />
    </Button>
  );
};

export default ToTopButton;
