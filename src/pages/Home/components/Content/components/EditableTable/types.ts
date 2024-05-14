import {
  TColumn,
  TRow,
} from "../../../../../../utils/types";

export interface IEditableTableProps {
  disabled?: boolean,
  data: Array<TRow>,
  columns: Array<TColumn>,
}