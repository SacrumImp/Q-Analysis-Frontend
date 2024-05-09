import { FC } from "react";
import {
  Text,
} from "../../../../../../../../uikit";
import { ISuccessfulResultProps } from "./types";

export const SuccessfulResult:FC<ISuccessfulResultProps> = (props) => {

  const { result } = props

  if (!result) return null

  return (
    <div>
      <Text>
        <b>Dimension:</b> {result.dimension}
      </Text>
      <Text>
        <b>Vector:</b> {result.vectorElements}
      </Text>
      <Text>
        <b>Eccentricities:</b> {JSON.stringify(result.eccentricities)}
      </Text>
    </div>
  )

}