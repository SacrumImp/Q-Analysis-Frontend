import { makeAutoObservable } from "mobx";
import { EMethods } from "../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../pages/Home/components/Content/components/RelationsTypeItem/types";
import {
  TColumn,
  TData,
  TRow,
} from "../utils/types";
import {
  defaultColumns,
} from "../utils/consts";
import { getDefaultData } from "../utils";
import {
  RelationType,
  BinaryType,
  WeightType,
} from "../classes";

class CalculationsFormStore {
  
  private _method: EMethods = EMethods.Casti;
  private _relationsTypeProperties: RelationType = new BinaryType();
  private _relationsType: ERelationsTypes = this._relationsTypeProperties.type;
  private _columns: Array<TColumn> = defaultColumns
  private _data: Array<TRow> = getDefaultData(this._relationsTypeProperties)
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

  get data(): Array<TRow> {
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
    switch(value) {
      case ERelationsTypes.binary:
        this._relationsTypeProperties = new BinaryType()
        break;
      case ERelationsTypes.weighted:
        this._relationsTypeProperties = new WeightType()
        break;
      default:
        throw "A non-implemented method was chosen"
    }
  }

  addElement = () => {
    this._lastIndex += 1
    let defaultValue: TData = this._relationsTypeProperties.getDefaultValue()

    this._data.forEach(row => {
      row.push(defaultValue)
    })
    const newDataRow: TRow = [this._lastIndex, ...Array(this._lastIndex).fill(defaultValue)]
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
    this._data = getDefaultData(this._relationsTypeProperties)
  }

  updateElement = (rowId: number, columnId: string, value: number) => {
    this._data[rowId][parseInt(columnId)] = value
  }

  setSliceValue = (value: number) => {
    this._sliceValue = value
  }

  setImportedTable = (columns: Array<TColumn>, data: Array<TRow>) => {
    this._columns = columns
    this._data = data
    this._lastIndex = columns.length - 1
  }

}

export const calculationsFormStore = new CalculationsFormStore();