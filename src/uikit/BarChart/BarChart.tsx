import { FC } from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  IBarChartData,
  IBarChartProps,
} from './types';
import { getRandomHexColor } from '../../utils';


const getName = (data: Array<IBarChartData>, index: number) =>  {
  const chart = data.find(chart => !!chart.values[index])
  return chart?.values[index].name || index
}

export const BarChart:FC<IBarChartProps> = (props) => {

  const {
    data,
  } = props

  if (!data.length) return null

  const maxBars = Math.max(...data.map(d => d.values.length));

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <RechartsBarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          Array.from({ length: maxBars }, (_, index) => (
            <Bar
              key={index}
              dataKey={(entry) => entry.values[index]?.value}
              fill={getRandomHexColor()}
              name={getName(data, index)}
            />
          ))
        }
      </RechartsBarChart>
    </ResponsiveContainer>
  )

}