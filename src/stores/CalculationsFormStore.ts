import { makeAutoObservable } from "mobx";
import { EMethods } from "../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../pages/Home/components/Content/components/RelationsTypeItem/types";
import {
  TColumn,
  TData,
} from "../utils/types";
import {
  defaultColumns,
  defaultData,
} from "../utils/consts";

class CalculationsFormStore {
  
  private _method: EMethods = EMethods.Casti;
  private _relationsType: ERelationsTypes = ERelationsTypes.binary;
  private _columns: Array<TColumn> = defaultColumns
  private _data: Array<TData> = defaultData
  private _lastIndex: number = 1

  private _sliceValue: number = 0 

  constructor() {
    makeAutoObservable(this);
  }

  get method(): EMethods {
    return this._method
  }

  get relationsType(): ERelationsTypes {
    return this._relationsType
  }

  get columns(): Array<TColumn> {
    return this._columns
  }

  get data(): Array<TData> {
    return this._data
  }

  get lastIndex(): number {
    return this._lastIndex
  }

  get sliceValue(): number {
    return this._sliceValue
  }

  setMethod = (value: EMethods) => {
    this._method = value
  }

  setRelationsType = (value: ERelationsTypes) => {
    this._relationsType = value
  }

  addElement = () => {
    this._lastIndex += 1
    this._data.forEach(row => {
      row.push(0)
    })
    const newDataRow: TData = [this._lastIndex, ...Array(this._lastIndex).fill(0)]
    this._data = [...this._data, newDataRow]
    const newColumn: TColumn = {
      header: this._lastIndex.toString(),
      accessorFn: (row) => row[this._lastIndex],
    }
    this._columns = [...this._columns, newColumn]
  }

  clearElements = () => {
    this._lastIndex = 1
    this._columns = defaultColumns
    this._data = defaultData
  }

  updateElement = (rowId: number, columnId: string, value: number) => {
    this._data[rowId][parseInt(columnId)] = value
  }

  setSliceValue = (value: number) => {
    this._sliceValue = value
  }

}

export const calculationsFormStore = new CalculationsFormStore();