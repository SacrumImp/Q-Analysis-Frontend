import {
  ChangeEventHandler,
  FC,
} from "react";
import { IWeightCellProps } from "./types";

export const WeightCell:FC<IWeightCellProps> = (props) => {
  
  const {
    value,
    changeValue,
    onBlur,
  } = props

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length === 0) return
    changeValue(parseInt(event.target.value))
  }

  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )

}