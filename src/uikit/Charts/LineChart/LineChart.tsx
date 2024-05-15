import { FC } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ILineChartProps } from './types';
import { getRandomHexColor } from '../../../utils';
import { getName } from '../login';


export const LineChart:FC<ILineChartProps> = (props) => {

  const { data } = props

  const maxElements = Math.max(...data.map(d => d.values.length));

  return (
    <ResponsiveContainer width="100%" height={500}>
        <RechartsLineChart
          width={500}
          height={500}
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
          Array.from({ length: maxElements }, (_, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={(entry) => entry.values[index]?.value}
              stroke={getRandomHexColor()}
              activeDot={{ r: 8 }}
              name={getName(data, index)}
              strokeWidth={4}
            />
          ))
        }
        </RechartsLineChart>
      </ResponsiveContainer>
  )

}