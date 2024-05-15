export interface IBarChartProps {
  data: Array<IBarChartData>,
}

export interface IBarChartData {
  name: string,
  values: Array<IBarChartDataValue>,
}

export interface IBarChartDataValue {
  name: string,
  value: number,
}