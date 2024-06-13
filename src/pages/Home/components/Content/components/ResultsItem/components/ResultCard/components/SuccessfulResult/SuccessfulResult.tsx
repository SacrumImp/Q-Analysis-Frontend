import { FC } from "react";
import {
  Text,
} from "../../../../../../../../../../uikit";
import { ISuccessfulResultProps } from "./types";
import { EccentricitiesTable } from "./components";
import { StringConst } from "../../../../../../../../../../utils";

export const SuccessfulResult:FC<ISuccessfulResultProps> = (props) => {

  const { result } = props

  if (!result?.result) return null

  return (
    <div>
      <Text>
        {StringConst.dimensionLabel}: {result.result.dimension}
      </Text>
      <Text>
        {StringConst.vectorLabel}: {result.result.vectorElements}
      </Text>
      <EccentricitiesTable
        data={result.result.eccentricities}
      />
    </div>
  )

}