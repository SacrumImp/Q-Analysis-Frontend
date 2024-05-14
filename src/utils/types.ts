import { ColumnDef } from "@tanstack/react-table";
import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../api/adapters/types";
import { RelationType } from "../classes";

export type TColumn = ColumnDef<TRow, TData>;
export type TRow = Array<TData>
export type TData = boolean | number

export interface IExportCalculations {
  name: string,
  relationTypeProperties: RelationType,
  isError: boolean,
  errorText?: string,
  systemStructure: IAnalysisStructure,
  calculationResults?: IAnalysisResult,
}