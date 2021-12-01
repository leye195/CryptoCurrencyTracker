import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & > img {
    margin-right: 0.5rem;
    height: 1.8rem;
    width: 1.8rem;
  }

  & > p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const ExchangeImgWrapper = styled.figure`
  margin: 0 0.5rem 0 0;
`;

export const VolumeWrapper = styled.div`
  margin-top: 0.5rem;

  & h5 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: #f3f0f0;
  }

  & span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const DescriptionWrapper = styled.div`
  & > p {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.blueYonder};
    white-space: pre-line;
  }
`;

export const StatWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const MarketsWrapper = styled.div`
  width: 100%;
  position: relative;

  & .table__container {
    overflow: auto hidden;
  }
`;
