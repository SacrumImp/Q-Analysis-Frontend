import { FC } from "react";
import { IGroupProps } from "./types";
import { Form } from "react-bootstrap";

export const Group:FC<IGroupProps> = (props) => {

  const {
    children,
    className,
  } = props

  return (
    <Form.Group
      className={className}
    >
      {children}
    </Form.Group>
  )

}