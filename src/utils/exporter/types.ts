import { IExportCalculations } from "../types";

export type TTableCellData = number | boolean | string | undefined

export type TTable = Array<Array<TTableCellData>>

export interface ICalculationResult extends IExportCalculations {
  id: number
}