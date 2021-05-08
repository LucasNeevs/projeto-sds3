import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from '../../utils/requests';
import { SaleSum } from 'types/SaleSum';

interface ChartData {
  series: number[];
  labels: string[];
}

const DonutChart = (): JSX.Element => {
  const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] });

  useEffect((): void => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then((response): void => {
        const data = response.data as SaleSum[];
        const myLabels = data.map((r: any) => r.sellerName);
        const mySeries = data.map((r: any) => r.sum);
        setChartData({
          series: mySeries,
          labels: myLabels,
        });
      })
      .catch((error): void => {
        console.log(error);
      });
  }, []);

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <>
      <Chart
        options={{ ...options, labels: chartData.labels }}
        series={chartData.series}
        type="donut"
        height="240"
      />
    </>
  );
};

DonutChart.displayName = 'DonutChart';

export default DonutChart;