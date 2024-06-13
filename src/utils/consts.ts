import {
  TColumn,
} from "./types";

export enum StringConst {
  startCellValue = "Index/Index",
  totallyDisconnected = "∞",
  vectorLabel = "Structural vector",
  dimensionLabel = "Dimension",
  calculationApproachLabel = "Eccentricity calculation approach",
}

export const defaultColumns: Array<TColumn> = [
  {
    header: StringConst.startCellValue,
    accessorFn: (row) => row[0],
  },
  {
    header: '1',
    accessorFn: (row) => row[1],
  }
]
