import {
  TColumn,
} from "./types";

export const startCellValue = "Index/Index";

export const defaultColumns: Array<TColumn> = [
  {
    header: startCellValue,
    accessorFn: (row) => row[0],
  },
  {
    header: '1',
    accessorFn: (row) => row[1],
  }
]
