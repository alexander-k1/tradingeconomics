import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

export function Visualization({ country1, country2 }) {
  const labels = country1
    .map((item) => new Date(item.DateTime).getFullYear())
    .slice(0, -1)
  const data = {
    labels,
    datasets: [
      {
        id: 1,
        fill: true,
        label: country1[0].Country,
        data: country1.map((item) => item.Value).filter(Boolean),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        id: 2,
        fill: true,
        label: country2[0].Country,
        data: country2.map((item) => item.Value).filter(Boolean),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  return <Line height={90} options={options} data={data} datasetIdKey='id' />
}
