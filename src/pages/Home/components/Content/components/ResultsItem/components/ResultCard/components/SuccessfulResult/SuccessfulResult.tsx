import { FC } from "react";
import {
  Text,
} from "../../../../../../../../../../uikit";
import { ISuccessfulResultProps } from "./types";
import { EccentricitiesTable } from "./components";

export const SuccessfulResult:FC<ISuccessfulResultProps> = (props) => {

  const { result } = props

  if (!result?.result) return null

  return (
    <div>
      <Text>
        Dimension: {result.result.dimension}
      </Text>
      <Text>
        Vector: {result.result.vectorElements}
      </Text>
      <EccentricitiesTable
        data={result.result.eccentricities}
      />
    </div>
  )

}