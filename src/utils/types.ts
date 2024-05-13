import { ColumnDef } from "@tanstack/react-table";
import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../api/adapters/types";

export type TColumn = ColumnDef<TRow, TData>;
export type TRow = Array<TData>
export type TData = boolean | number

export interface IExportCalculations {
  isError: boolean,
  errorText?: string,
  systemStructure: IAnalysisStructure,
  calculationResults?: IAnalysisResult,
}