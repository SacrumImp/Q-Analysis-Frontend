import { FC } from "react";
import {
  Text,
} from "../../../../../../../../uikit";
import { ISuccessfulResultProps } from "./types";
import { EccentricitiesTable } from "../EccentricitiesTable/EccentricitiesTable";

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
      <EccentricitiesTable
        data={result.eccentricities}
      />
    </div>
  )

}