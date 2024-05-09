import { ColumnDef } from "@tanstack/react-table";
import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../api/adapters/types";

export type TColumn = ColumnDef<TData, number>;
export type TData = Array<number>

export interface IExportCalculations {
  systemStructure: IAnalysisStructure,
  calculationResults: IAnalysisResult,
}