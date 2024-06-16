import {
  IAnalysisResult,
  IVectorResults,
} from "../../../../../../../../../api/adapters/types";
import {
  IChartData,
  IChartDataValue,
} from "../../../../../../../../../uikit";
import { ICalculationResult } from "../../../../../../../../../utils/types";
import { IVectorString } from "../types";

export const prepareVectorChartData = (data: Array<ICalculationResult>, colors: Array<string>): Array<IChartData> => {

  const vectorsResults = data.map(prepareVectors)
  const maxDimension = Math.max( ...vectorsResults.map(result => result.dimension)) + 1

  let result: Array<IChartData> = []
  Array.from({ length: maxDimension }, (_, index) => {
    const dim: IChartData = {
      name: {
        prefix: "Level of connectivity",
        value: index.toString()
      },
      values: vectorsResults
        .filter(vectorResult => vectorResult.vectorValues[index])
        .map((vectorResult, resultIndex) => {
          return {
            name: vectorResult.name,
            value: vectorResult.vectorValues[index],
            color: colors[resultIndex],
            additionalInfo: vectorResult.connectivityComponents !== undefined ? prepareConnectivityComponents(vectorResult.connectivityComponents[index]) : undefined
          }
      }),
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
    connectivityComponents: result?.result.connectivityComponents || undefined,
  }
}

export const prepareEccentricitiesChartData = (data: Array<ICalculationResult>, colors: Array<string>): Array<IChartData> => {

  const maxCount = Math.max( ...data.map(result => getResultForComparison(result.calculationResults)?.result.eccentricities.length || 0))

  let result: Array<IChartData> = []
  Array.from({ length: maxCount }, (_, index) => {
    const dim: IChartData = {
      name: {
        prefix: "Simplex",
        value: index.toString()
      },
      values: data.map((result, resultIndex) => {
        const eccentricity = getResultForComparison(result.calculationResults)?.result.eccentricities[index]
        if (!eccentricity) return
        else if (eccentricity.isTotallyDisconnected) {
          return {
            name: result.name,
            value: null,
            color: colors[resultIndex],
          }
        }
        return {
          name: result.name,
          value: getResultForComparison(result.calculationResults)?.result.eccentricities[index].value,
          color: colors[resultIndex],
        }
      }).filter((res): res is IChartDataValue => res !== undefined),
    }
    result.push(dim)
  })

  return result
}

export const prepareVectorsStrings = (data: Array<ICalculationResult>): Array<IVectorString> => {
  return data.map(result => {
    return {
      name: result.name,
      value: getResultForComparison(result.calculationResults)?.result.vectorElements || "",
    }
  })
}

const prepareConnectivityComponents = (data: Array<Array<number>> | null) => {
  if (data === null) return undefined
  var components = data.map(component => {
    return `{${component.map(element => `X${element}`).join(", ")}}`
  })
  return components.join(", ")
}