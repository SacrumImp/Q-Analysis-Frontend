/* eslint-disable react-hooks/rules-of-hooks */
import {
  useEffect,
  useState,
} from "react";
import { TRow } from "../../../../../../../../../../utils/types";
import {
  ColumnDef,
  RowData,
} from "@tanstack/react-table";
import { InputCell } from "../InputCell";

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

export const defaultColumn: Partial<ColumnDef<TRow>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const onChange = (e: any) => {
      setValue(e.target.value)
    }

    if (id === 'Index/Index') {
      return (
        <span>
          {value as string}
        </span>
      )
    }

    return (
      <InputCell
        value={value as string}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  },
}