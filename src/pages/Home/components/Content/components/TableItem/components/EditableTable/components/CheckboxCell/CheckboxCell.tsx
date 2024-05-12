import { ChangeEventHandler, FC } from "react";
import { ICheckboxCellProps } from "./types";

export const CheckboxCell:FC<ICheckboxCellProps> = (props) => {

  const {
    value,
    changeValue,
    onBlur,
  } = props

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    changeValue(event.target.checked)
  }
    
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )

}