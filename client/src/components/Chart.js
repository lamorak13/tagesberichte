import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function Chart() {
  const reports = useSelector((state) => state.reports.items);
  const name = useSelector((state) => state.reports.person);
  const selectedReports = reports.filter((report) => report.name === name);

  function getDateFromData(date) {
    const test = new Date(date);
    const day = test.getDate();
    const month = test.getMonth();
    const year = test.getFullYear();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${day}. ${monthNames[month]}, ${year}`;
  }

  const labels = selectedReports.map((report) => getDateFromData(report.date));

  const data = {
    labels: labels,
    datasets: [
      {
        label: name,
        data: selectedReports.map((report) => report.temperatur).reverse(),
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
