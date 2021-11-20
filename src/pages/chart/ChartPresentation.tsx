import ReactApex from 'react-apexcharts';
import styled from 'styled-components';
import Common from 'components/common';
import ChartButton from 'components/ChartButton';
import { CoinOHLCType } from 'types/coin';

type Props = {
  isLoading: boolean;
  data?: CoinOHLCType[];
  handlePeriod: (period: string) => () => void;
  period: string;
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

  & .period-group {
    padding: 0.5rem;
    background-color: rgb(239, 242, 245);
    border-radius: 0.5rem;
    user-select: none;
  }
`;

const ChartPresentation = ({
  isLoading,
  data,
  handlePeriod,
  period = '7d',
}: Props) => {
  return (
    <Container>
      <Common.ButtonGroup className="period-group">
        <Common.Row full>
          <ChartButton
            className={period === '7d' ? 'active' : ''}
            type="button"
            onClick={handlePeriod('7d')}
          >
            <span>7D</span>
          </ChartButton>
          <ChartButton
            className={period === '1m' ? 'active' : ''}
            type="button"
            onClick={handlePeriod('1m')}
          >
            1M
          </ChartButton>
          <ChartButton
            className={period === '3m' ? 'active' : ''}
            type="button"
            onClick={handlePeriod('3m')}
          >
            3M
          </ChartButton>
          <ChartButton
            className={period === '1y' ? 'active' : ''}
            type="button"
            onClick={handlePeriod('1y')}
          >
            1Y
          </ChartButton>
        </Common.Row>
      </Common.ButtonGroup>

      {isLoading && (
        <Common.Row
          className="loading"
          justifyContent="center"
          alignItems="center"
        >
          <Common.Loading />
        </Common.Row>
      )}

      <ReactApex
        type="line"
        height={300}
        width="100%"
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            id: 'chart1',
            group: 'price',
            height: 300,
            toolbar: {
              autoSelected: 'pan',
              show: false,
            },
            background: 'transparent',
          },
          stroke: {
            curve: 'smooth',
            width: 3.5,
          },
          colors: ['#008FFB'],
          xaxis: {
            type: 'datetime',
            categories: data?.map((price) => price.time_close),
          },
          yaxis: {
            labels: {
              formatter: (value) => `$${value.toFixed(2)}`,
            },
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: undefined,
              title: {
                formatter: (seriesName) => seriesName,
              },
            },
          },
        }}
        series={[
          {
            name: 'Price:',
            data: data?.map((price) => price.close.toFixed(2)),
          },
        ]}
      />
    </Container>
  );
};

export default ChartPresentation;
