import {
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { TTrapezoid } from "../../../../../../classes";
import { IRelationGraphProps } from "./types";

export const useRelationGraph = (props: IRelationGraphProps) => {

  const { data } = props
  const [rowValue, setRowValue] = useState(1)
  const [columnValue, setColumnValue] = useState(1)

  const [value, setValue] = useState<TTrapezoid>(null)

  const onChangeRowValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = parseInt(event.target.value)
    setRowValue(value)
  }

  const onChangeColumnValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = parseInt(event.target.value)
    setColumnValue(value)
  }

  useEffect(() => {
    setRowValue(1)
    setColumnValue(1)
  }, [data])

  useEffect(() => {
    if (!data) setValue(null)
    else {
      if (data.length > (rowValue - 1) &&
        data[rowValue - 1].length > columnValue
      ) {
        var cell = data[rowValue - 1][columnValue]
        if (cell !== undefined) {
          setValue(cell as unknown as TTrapezoid)
        }
        else setValue(null)
      }
      else {
        setValue(null)
      }
    }
  }, [rowValue, columnValue, data])


  return {
    // Using unknown to overcome problem with TTrapezoid type inside TData
    selectOptions: data.map(row => row[0] as unknown as number),
    value,
    rowValue,
    columnValue,
    onChangeRowValue,
    onChangeColumnValue,
  }

}