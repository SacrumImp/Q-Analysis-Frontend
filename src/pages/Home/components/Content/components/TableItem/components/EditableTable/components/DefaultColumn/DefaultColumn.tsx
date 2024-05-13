/* eslint-disable react-hooks/rules-of-hooks */
import {
  useEffect,
  useState,
} from "react";
import {
  TData,
  TRow,
} from "../../../../../../../../../../utils/types";
import {
  ColumnDef,
  RowData,
} from "@tanstack/react-table";
import { WeightCell } from "../WeightCell";
import { CheckboxCell } from "../CheckboxCell";
import { StringConst } from "../../../../../../../../../../utils";

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

export const defaultColumn: Partial<ColumnDef<TRow>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue() as TData;
    const [value, setValue] = useState<TData>(initialValue);

    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const changeValue = (value: TData) => {
      setValue(value)
    }

    if (id === StringConst.startCellValue) {
      return (
        <span>
          {value}
        </span>
      )
    }

    switch (typeof value) {
      case "boolean":
        return (
          <CheckboxCell
            value={value}
            changeValue={changeValue}
            onBlur={onBlur}
          />
        )
      case "number":
        return (
          <WeightCell
            value={value}
            changeValue={changeValue}
            onBlur={onBlur}
          />
        );
      default:
        return (
          <span>
            {value}
          </span>
        )
    }

  },
}