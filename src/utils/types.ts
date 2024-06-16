import { ColumnDef } from "@tanstack/react-table";
import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../api/adapters/types";
import {
  RelationType,
  TTrapezoid,
} from "../classes";
import { TTrapezoidSegments } from "../classes/RelationTypes/FuzzySetsType2Type/types";

export type TColumn = ColumnDef<TRow, TData>;
export type TRow = Array<TData>
export type TData = boolean | number | TTrapezoid | TTrapezoidSegments

export interface IExportCalculations {
  name: string,
  relationTypeProperties: RelationType,
  isError: boolean,
  errorText?: string,
  systemStructure: IAnalysisStructure,
  calculationResults?: Array<IAnalysisResult>,
}

export interface ICalculationResult extends IExportCalculations {
  id: number,
  inComparison: boolean,
}