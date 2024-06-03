import { Form } from "react-bootstrap";
import { Text } from "../../../Text";
import { FC } from "react";
import { ILabelProps } from "./types";

export const Label:FC<ILabelProps> = (props) => {

  const { children } = props

  return (
    <Form.Label>
      <Text>
        {children}
      </Text>
    </Form.Label>
  )

}