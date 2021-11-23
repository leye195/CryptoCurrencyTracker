import styled from 'styled-components';
import Common from 'components/common';
import { CoinMarketType } from 'types/coin';
import MarketTable from 'components/MarketTable';

type Props = {
  isLoading: boolean;
  data?: CoinMarketType[];
};

const Container = styled.div`
  width: 100%;
  position: relative;

  & .loading {
    width: 100%;
    height: 100%;
    background-color: #00000057;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  & .table__container {
    overflow: auto hidden;
  }
`;

const MarketPresentation = ({ isLoading, data }: Props) => {
  return (
    <Container>
      {isLoading && (
        <Common.Row
          className="loading"
          justifyContent="center"
          alignItems="center"
        >
          <Common.Loading />
        </Common.Row>
      )}
      <Common.Col className="table__container">
        {data && <MarketTable markets={data} />}
      </Common.Col>
    </Container>
  );
};

export default MarketPresentation;
