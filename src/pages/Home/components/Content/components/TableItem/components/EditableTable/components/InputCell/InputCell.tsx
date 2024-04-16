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
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )

}