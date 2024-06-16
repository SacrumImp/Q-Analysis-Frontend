import {
  IDomain,
  TTrapezoid,
  TTrapezoidSegments,
} from "../../../classes";

export type TTrapezoidChartValue = TTrapezoid | TTrapezoidSegments;
export type TTrapezoidChartValueType = "trapezoid" | "trapezoid-segments";

export interface ITrapezoidChartProps {
  value: TTrapezoidChartValue,
  domain: IDomain,
  type?: TTrapezoidChartValueType,
}

export interface ITrapezoidChartData {
  title: string,
  xValue: number,
  yValue: number,
}