import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSuccess } from '../../types/SaleSuccess';
import { round } from 'utils/format';

interface ChartData {
  labels: {
    categories: string[];
  };
  series: [
    {
      name: string;
      data: number[];
    },
  ];
};

const BarChart = (): JSX.Element => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
  });

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  useEffect((): void => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then((response): void => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map((label) => label.sellerName);
        const mySeries = data.map((serie) => round(100.0 * serie.deals / serie.visited, 1));

        setChartData({
          labels: {
            categories: myLabels,
          },
          series: [
            {
              name: '% de Sucesso',
              data: mySeries,
            },
          ],
        });
      })
      .catch((error): void => {
        console.log(error);
      })
  }, []);

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

BarChart.displayName = 'BarChart';

export default BarChart;