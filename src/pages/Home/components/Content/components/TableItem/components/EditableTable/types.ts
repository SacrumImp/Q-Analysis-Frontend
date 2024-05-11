import {
  TColumn,
  TRow,
} from "../../../../../../../../utils/types";

export interface IEditableTable {
  data: Array<TRow>,
  columns: Array<TColumn>,
}