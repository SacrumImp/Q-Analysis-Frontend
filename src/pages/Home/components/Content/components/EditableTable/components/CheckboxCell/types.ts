import { ICellProps } from "../types";

export interface ICheckboxCellProps extends ICellProps {
  value: boolean,
  changeValue: (value: boolean) => void,
}