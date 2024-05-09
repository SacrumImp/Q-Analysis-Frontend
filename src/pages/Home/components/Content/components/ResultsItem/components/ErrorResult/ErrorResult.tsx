import { FC } from "react";
import {
  Text,
} from "../../../../../../../../uikit";
import { IErrorResultProps } from "./types";

export const ErrorResult:FC<IErrorResultProps> = (props) => {

  const { errorText } = props

  if (!errorText) return null

  return (
    <div>
      <Text>
        <b>{errorText}</b> 
      </Text>
    </div>
  )

}