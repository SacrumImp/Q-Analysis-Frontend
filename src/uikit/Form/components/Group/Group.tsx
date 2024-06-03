import { FC } from "react";
import { IGroupProps } from "./types";
import { Form } from "react-bootstrap";

export const Group:FC<IGroupProps> = (props) => {

  const { children } = props

  return (
    <Form.Group>
      {children}
    </Form.Group>
  )

}