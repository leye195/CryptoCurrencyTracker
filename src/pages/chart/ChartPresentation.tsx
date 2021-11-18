import ReactApex from 'react-apexcharts';
import { CoinOHLCType } from 'types/coin';

type Props = {
  isLoading: boolean;
  isFetched: boolean;
  data?: CoinOHLCType[];
};

const ChartPresentation = ({ isLoading, isFetched, data }: Props) => {
  return (
    <div>
      {isLoading && 'Loading Chart...'}
      {isFetched && (
        <>
          <ReactApex
            type="line"
            width={480}
            height={280}
            options={{
              theme: {
                mode: 'dark',
              },
              chart: {
                id: 'chart1',
                group: 'price',
                height: 480,
                width: 280,
                toolbar: {
                  autoSelected: 'pan',
                  show: false,
                },
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
                  formatter: (value) => `$${value.toFixed(3)}`,
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
          <ReactApex
            type="area"
            width={480}
            height={120}
            options={{
              theme: {
                mode: 'dark',
              },
              chart: {
                id: 'chart2',
                type: 'area',
                group: 'price',
                width: 480,
                height: 120,
                brush: {
                  target: 'chart1',
                  enabled: true,
                },
                selection: {
                  enabled: false,
                },
              },
              colors: ['#008FFB'],
              xaxis: {
                type: 'datetime',
                categories: data?.map((price) => price.time_close),
              },
              yaxis: {
                tickAmount: 2,
                labels: {
                  formatter: (value) => `$${value.toFixed(3)}`,
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
        </>
      )}
    </div>
  );
};

export default ChartPresentation;
