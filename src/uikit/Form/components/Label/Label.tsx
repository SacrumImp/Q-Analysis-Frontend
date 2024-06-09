import { Form } from "react-bootstrap";
import { FC } from "react";
import { Text } from "../../../Text";
import { ILabelProps } from "./types";

export const Label:FC<ILabelProps> = (props) => {

  const { children } = props

  return (
    <Form.Label>
      <Text type="span">
        {children}
      </Text>
    </Form.Label>
  )

}