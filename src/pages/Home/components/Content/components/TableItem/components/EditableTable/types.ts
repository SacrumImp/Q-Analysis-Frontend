import {
  TColumn,
  TData,
} from "../../../../../../../../utils/types";

export interface IEditableTable {
  data: Array<TData>,
  columns: Array<TColumn>,
}