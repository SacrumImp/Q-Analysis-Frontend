import {
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { useStoreContext } from "../../../../../../../../stores";
import { TTrapezoid } from "../../../../../../../../classes";

export const useGraphView = () => {

  const { calculationsFormStore } = useStoreContext()

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
  }, [calculationsFormStore.data])

  useEffect(() => {
    if (!calculationsFormStore.data) setValue(null)
    else {
      if (calculationsFormStore.data.length > (rowValue - 1) &&
        calculationsFormStore.data[rowValue - 1].length > columnValue
      ) {
        setValue(calculationsFormStore.data[rowValue - 1][columnValue] as unknown as TTrapezoid)
      }
      else {
        setValue(null)
      }
    }
  }, [rowValue, columnValue, calculationsFormStore.data])


  return {
    // Using unknown to overcome problem with TTrapezoid type inside TData
    selectOptions: calculationsFormStore.data.map(row => row[0] as unknown as number),
    data: value,
    rowValue,
    columnValue,
    onChangeRowValue,
    onChangeColumnValue,
  }

}