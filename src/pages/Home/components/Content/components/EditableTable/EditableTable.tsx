import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  FC,
} from "react";
import { Table } from "../../../../../../uikit";
import { observer } from "mobx-react";
import { IEditableTableProps } from "./types";
import { useEditableTable } from "./useEditableTable";
import { getDefaultColumn } from "./components";

export const EditableTable:FC<IEditableTableProps> = observer((props) => {

  const {
    disabled = false,
    data,
    columns,
  } = props

  const {
    updateElement,
  } = useEditableTable()

  let table = useReactTable({
    data,
    columns,
    defaultColumn: getDefaultColumn(disabled),
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: updateElement,
    },
  });

  return (
    <Table>
      <thead>
        {
          table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))
        }
      </thead>
      <tbody>
      {
        table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      }
                    </td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )

})