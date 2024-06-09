import { TData } from "../types";

export type TTableCellData = number | boolean | string | undefined

export type TTable = Array<Array<TTableCellData>>

export type TTransformValueFunc = (value: TData) => string | undefined