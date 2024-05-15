export interface IChartData {
  name: string,
  values: Array<IChartDataValue>,
}

export interface IChartDataValue {
  name: string,
  value: number,
}