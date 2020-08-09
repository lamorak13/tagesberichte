import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function Chart() {
  const reports = useSelector((state) => state.reports.items);
  const jakob = reports
    .filter((report) => report.name === 'Jakob')
    .map((report) => report.temperatur);
  const steffi = reports
    .filter((report) => report.name === 'Steffi')
    .map((report) => report.temperatur);

  const data = {
    datasets: [
      {
        label: 'Jakob',
        data: jakob,
        backgroundColor: 'rgba(244,56,39,0.25)',
        borderColor: 'rgba(244,56,39,.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(244,56,39,.8)',
      },
      {
        label: 'Steffi',
        data: steffi,
        backgroundColor: 'rgba(254, 207, 86, 0.25)',
        borderColor: 'rgba(254, 207, 86, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(254, 207, 86, 0.8)',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Körpertemperatur',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 36,
            max: 38,
            stepSize: 0.5,
          },
        },
      ],
    },
  };

  return (
    <div className='container container-shadow chart-container'>
      <Line data={data} options={options} width={4} height={1} />
    </div>
  );
}

export default Chart;
