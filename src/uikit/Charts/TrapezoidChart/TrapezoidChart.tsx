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
  ITrapezoidChartProps,
} from './types';
import { Text } from '../../../uikit';
import "./styles.scss";
import { CustomTooltip } from './atoms';
import { prepareData } from './logic';

export const TrapezoidChart:FC<ITrapezoidChartProps> = (props) => {

  const {
    value,
    domain,
    type = "trapezoid",
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

  const preparedData = prepareData(value, type)

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
        <Tooltip content={<CustomTooltip/>}/>
        <Legend />
        <Line
          data={preparedData}
          name={"Rate"}
          activeDot={{ r: 8 }}
          strokeWidth={4}
          dataKey="yValue"
        />
      </LineChart>
    </ResponsiveContainer>
  )

} 