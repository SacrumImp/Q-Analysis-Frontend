import { IChartData } from "../types";

export const getMaxValue = (data: Array<IChartData>) => {
  const allValues = data.flatMap(entry => entry.values);
  const numericValues = allValues
    .map(dataValue => dataValue.value)
    .filter((value): value is number => value !== null);
  return Math.max(...numericValues);
}