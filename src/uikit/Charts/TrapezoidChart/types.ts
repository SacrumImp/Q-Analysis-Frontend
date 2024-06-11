import {
  TTrapezoid,
  IDomain,
} from "../../../classes";

export interface ITrapezoidChartProps {
  value: TTrapezoid,
  domain: IDomain,
}

export interface ITrapezoidChartData {
  xValue: number,
  yValue: number,
}