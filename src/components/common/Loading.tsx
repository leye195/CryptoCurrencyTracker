import styled, { keyframes } from 'styled-components';

const loadingAni = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 3rem;
  width: 3rem;
  border: 0.25rem solid rgba(227, 227, 227, 0.5);
  border-top: 0.25rem solid rgba(227, 227, 227);
  border-radius: 50%;
  animation: ${loadingAni} 0.8s ease-in-out infinite;
`;

const Indicator = styled.div`
  background-color: transparent;
`;

const Loading = () => {
  return (
    <Container>
      <Indicator />
    </Container>
  );
};

export default Loading;
