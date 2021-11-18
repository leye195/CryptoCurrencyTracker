import ReactApex from 'react-apexcharts';
import styled from 'styled-components';
import { CoinOHLCType } from 'types/coin';

type Props = {
  isLoading: boolean;
  isFetched: boolean;
  data?: CoinOHLCType[];
};

const Container = styled.div`
  width: 100%;
`;

const ChartPresentation = ({ isLoading, isFetched, data }: Props) => {
  return (
    <Container>
      {isLoading && 'Loading Chart...'}
      {isFetched && (
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
      )}
    </Container>
  );
};

export default ChartPresentation;
