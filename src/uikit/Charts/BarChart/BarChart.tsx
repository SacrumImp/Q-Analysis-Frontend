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
  Cell,
} from 'recharts';
import {
  IBarChartProps,
  InfinityChartColor,
} from './types';
import { getName } from '../logic';
import { HorizontalScrollContainer } from '../../HorizontalScrollContainer';
import { getMaxValue } from './logic';
import { CustomTooltip } from './atoms';
import { Formatter } from 'recharts/types/component/DefaultLegendContent';

export const BarChart:FC<IBarChartProps> = (props) => {

  const {
    data,
  } = props

  if (!data.length) return null

  const maxBars = Math.max(...data.map(entry => entry.values.length));
  const maxValue = getMaxValue(data) + 1
  const maxWidth = data.length * maxBars * 35;

  const renderLegend:Formatter = (value, entry, index) => {
    const color = data[0].values[index]?.color || '#000';
    return <span style={{ color }}>{value}</span>;
  };

  return (
    <HorizontalScrollContainer>
      <ResponsiveContainer
        width="100%"
        height={300}
        minWidth={maxWidth > 0 ? maxWidth : 400}
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
          <XAxis dataKey="name.value" />
          <YAxis domain={[0, maxValue]}/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend iconSize={5} formatter={renderLegend}/>
          {
            Array.from({ length: maxBars }, (_, index) => (
              <Bar
                key={index}
                dataKey={(entry) => entry.values[index]?.value !== null ? entry.values[index]?.value : maxValue}
                name={getName(data, index)}
              >
                {
                  data.map((entry, barIndex) => (
                    <Cell key={`cell-${barIndex}`} fill={entry.values[index]?.value !== null ? entry.values[index]?.color : InfinityChartColor} />
                  ))
                }
              </Bar>
            ))
          }
        </RechartsBarChart>
      </ResponsiveContainer>
    </HorizontalScrollContainer>
  )

}