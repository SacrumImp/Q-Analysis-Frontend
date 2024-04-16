import {
  FC,
} from "react";
import { IInputCellProps } from "./types";

export const InputCell:FC<IInputCellProps> = (props) => {
  
  const {
    value,
    onChange,
    onBlur,
  } = props

  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )

}