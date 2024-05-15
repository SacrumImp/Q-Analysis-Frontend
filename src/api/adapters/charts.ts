import { IBarChartData, IBarChartDataValue } from "../../uikit";
import { ICalculationResult } from "../../utils/types";
import { IVectorResults } from "./types";

export const prepareVectorChartData = (data: Array<ICalculationResult>): Array<IBarChartData> => {

  const vectorsResults = data.map(prepareVectors)
  const maxDimension = Math.max( ...vectorsResults.map(result => result.dimension)) + 1

  let result: Array<IBarChartData> = []
  Array.from({ length: maxDimension }, (_, index) => {
    const dim: IBarChartData = {
      name: index.toString(),
      values: vectorsResults.map(vectorResult => {
        if (!vectorResult.vectorValues[index]) return
        return {
          name: vectorResult.name,
          value: vectorResult.vectorValues[index]
        }
      }).filter((res): res is IBarChartDataValue => res !== undefined),
    }
    result.push(dim)
  })

  return result.reverse()

}

const prepareVectors = (data: ICalculationResult): IVectorResults => {

  const vectorValues = data.calculationResults?.vectorElements
    .replace(/[()]/g, '')
    .split(",")
    .map(element => parseInt(element.trim()))
    .reverse()
    || []

  return {
    name: data.name,
    dimension: data.calculationResults?.dimension || 0,
    vectorValues: vectorValues, 
  }

}