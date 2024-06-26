import {
  ChangeEvent,
  useState,
} from 'react';
import * as XLSX from 'xlsx';
import {
  replaceEmptyValues,
  validateTable,
} from './logic';
import {
  TColumn,
  TRow,
} from '../../../../../../../../utils/types';
import { useStoreContext } from '../../../../../../../../stores';
import { StringConst } from '../../../../../../../../utils';

export const useImportModal = () => {

  const { calculationsFormStore } = useStoreContext()

  const [currentImportedTable, setCurrentImportedTable] = useState<any[]>()
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [errors, setErrors] = useState<Array<string>>([])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    const file = e.target.files[0]

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const importedData = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: null });
      const preparedImportedData = replaceEmptyValues(importedData)

      const validationResult = validateTable(preparedImportedData, calculationsFormStore.relationsTypeProperties)
      setIsValid(validationResult.isValid)
      setErrors(validationResult.errorList)
      if (validationResult.isValid) {
        setCurrentImportedTable(preparedImportedData)
      }
    };
    reader.readAsArrayBuffer(file);
  }

  const saveTable = () => {
    if (!currentImportedTable) return
    const importedTable = currentImportedTable

    const columns: Array<TColumn> = []
    const importedColumns = importedTable.shift()
    importedColumns.forEach((column: any, index: number) => {
      if (index === 0) {
        const firstColumn: TColumn = {
          header: StringConst.startCellValue,
          accessorFn: (row) => row[index],
        } 
        columns.push(firstColumn)
        return
      }
      const generalColumn: TColumn = {
        header: column.toString(),
        accessorFn: (row) => row[index],
      }
      columns.push(generalColumn)
    })

    const data: Array<TRow> = importedTable.map((row) => {
      return row.map((value: any, index: number) => {
        // Used for saving the first column with index numbers
        if (index === 0) return value
        else {
          return calculationsFormStore.relationsTypeProperties.transformValueFromString(value)
        }
      })
    })

    calculationsFormStore.setImportedTable(columns, data)
    setIsValid(null)
    setErrors([])
  }

  const onHide = () => {
    setIsValid(null)
    setErrors([])
  }

  return {
    onChange,
    isValid,
    errors,
    saveTable,
    onHide,
  }

}