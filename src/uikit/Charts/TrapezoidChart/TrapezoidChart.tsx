import { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  ITrapezoidChartData,
  ITrapezoidChartProps,
} from './types';
import { Text } from '../../../uikit';
import "./styles.scss";
import { TTrapezoid } from '../../../classes';

const prepareData = (value: TTrapezoid): Array<ITrapezoidChartData> => {
  if (value === null) return []
  return [
    {
      xValue: value.LeftBottomPart,
      yValue: 0,
    },
    {
      xValue: value.LeftTopPart,
      yValue: 1,
    },
    {
      xValue: value.RightTopPart,
      yValue: 1,
    },
    {
      xValue: value.RightBottomPart,
      yValue: 0,
    },
  ]
}

export const TrapezoidChart:FC<ITrapezoidChartProps> = (props) => {

  const {
    value,
    domain,
  } = props

  if (value === null) {
    return (
      <Text
        className='trapezoid-chart__no-relation-text'
      >
        There is no relation.
      </Text>
    )
  }

  const data = prepareData(value)

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart
        width={500}
        height={500}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="xValue"
          type="number"
          domain={[domain.LeftBoundary, domain.RightBoundary]}
        />
        <YAxis
          dataKey="yValue"
          domain={[0,1]}
        />
        <Tooltip />
        <Legend />
        <Line
          data={data}
          name={"Rate"}
          activeDot={{ r: 8 }}
          strokeWidth={4}
          dataKey="yValue"
        />
      </LineChart>
    </ResponsiveContainer>
  )

} 