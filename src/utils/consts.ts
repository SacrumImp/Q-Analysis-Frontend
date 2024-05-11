import {
  TColumn,
  TRow,
} from "./types";

export const defaultColumns: Array<TColumn> = [
  {
    header: 'Index/Index',
    accessorFn: (row) => row[0],
  },
  {
    header: '1',
    accessorFn: (row) => row[1],
  }
]

export const defaultData: Array<TRow> = [
  [1, 0],
]