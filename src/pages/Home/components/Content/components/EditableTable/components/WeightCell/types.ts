import { ICellProps } from "../types";

export interface IWeightCellProps extends ICellProps {
  value: number,
  changeValue: (value: number) => void,
}