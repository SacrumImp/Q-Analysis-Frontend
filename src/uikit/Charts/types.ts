export interface IChartData {
  name: IChartDataName,
  values: Array<IChartDataValue>,
}

export interface IChartDataName {
  prefix: string,
  value: string
}

export interface IChartDataValue {
  name: string,
  value: number | null,
  color: string,
}