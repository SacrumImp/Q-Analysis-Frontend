import {
  IAnalysisResult,
  IVectorResults,
} from "../../../../../../../../../api/adapters/types";
import {
  IChartData,
  IChartDataValue,
} from "../../../../../../../../../uikit";
import { ICalculationResult } from "../../../../../../../../../utils/types";

export const prepareVectorChartData = (data: Array<ICalculationResult>): Array<IChartData> => {

  const vectorsResults = data.map(prepareVectors)
  const maxDimension = Math.max( ...vectorsResults.map(result => result.dimension)) + 1

  let result: Array<IChartData> = []
  Array.from({ length: maxDimension }, (_, index) => {
    const dim: IChartData = {
      name: index.toString(),
      values: vectorsResults.map(vectorResult => {
        if (!vectorResult.vectorValues[index]) return
        return {
          name: vectorResult.name,
          value: vectorResult.vectorValues[index]
        }
      }).filter((res): res is IChartDataValue => res !== undefined),
    }
    result.push(dim)
  })

  return result.reverse()

}

const getResultForComparison = (results: Array<IAnalysisResult> | undefined): IAnalysisResult | undefined => {
  if (results === undefined || results.length === 0) return
  if (results.length > 1) {
    return results.find(result => result.isAggregated)
  }
  return results[0]
}

const prepareVectors = (data: ICalculationResult): IVectorResults => {
  const result = getResultForComparison(data.calculationResults)
  const vectorValues = result?.result.vectorElements
    .replace(/[()]/g, '')
    .split(",")
    .map(element => parseInt(element.trim()))
    .reverse()
    || []

  return {
    name: data.name,
    dimension: result?.result.dimension || 0,
    vectorValues: vectorValues, 
  }
}

export const prepareEccentricitiesChartData = (data: Array<ICalculationResult>): Array<IChartData> => {

  const maxCount = Math.max( ...data.map(result => getResultForComparison(result.calculationResults)?.result.eccentricities.length || 0))

  let result: Array<IChartData> = []
  Array.from({ length: maxCount }, (_, index) => {

    const dim: IChartData = {
      name: index.toString(),
      values: data.map(result => {
        const eccentricity = getResultForComparison(result.calculationResults)?.result.eccentricities[index]
        if (!eccentricity || eccentricity.isTotallyDisconnected) return {
          name: result.name,
          value: null,
        }
        return {
          name: result.name,
          value: getResultForComparison(result.calculationResults)?.result.eccentricities[index].value
        }
      }).filter((res): res is IChartDataValue => res !== undefined),
    }
    result.push(dim)
  })

  return result
}