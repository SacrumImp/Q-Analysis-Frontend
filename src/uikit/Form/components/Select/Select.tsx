import { FC } from "react";
import { Form } from "react-bootstrap";
import { ISelectProps } from "./types";

export const Select:FC<ISelectProps> = (props) => {

  const {
    className = "",
    children,
    value,
    onChange,
  } = props

  return (
    <Form.Select
      className={className}
      value={value}
      onChange={onChange}
    >
      {children}
    </Form.Select>
  )

}