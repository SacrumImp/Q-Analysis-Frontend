import { IChartData } from "./types";

export const getName = (data: Array<IChartData>, index: number): string =>  {
  const chart = data.find(chart => !!chart.values[index])
  return chart?.values[index].name || index.toString()
}
