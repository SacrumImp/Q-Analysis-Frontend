import {
  IPrepareStructureParams,
  IAnalysisStructure,
  ISimplex,
  IAnalysisResultData,
  IAnalysisResult,
  IEccentricitiesData,
  IEccentricities,
  ICalculationResultData,
  ICalculationResult,
  IAnalysisResultKeyData,
  IAnalysisResultKey,
} from "./types";

export const prepareStructure = (params: IPrepareStructureParams): IAnalysisStructure => {

  const {
    method,
    relations,
    relationsTypeProperties,
  } = params

  const data: IAnalysisStructure = {
    EccentricityCalculationMethod: parseInt(method),
    Simplices: []
  }
  
  for (let i = 0; i < relations.length; i++ ) {
    const simplex: ISimplex = {
      Index: i,
      Relations: []
    }

    for (let j = 1; j <= relations.length; j++ ) {
      simplex.Relations.push(relationsTypeProperties.getRelationWithValue(relations[i][j]))
    }

    data.Simplices.push(simplex)
  }

  return data

}

const parseEccentricities = (data: IEccentricitiesData): IEccentricities => {
  return {
    simplexIndex: data.simplexIndex,
    value: data.value,
    isTotallyDisconnected: data.isTotallyDisconnected,
  }
}

const parseCalculationResult = (data: ICalculationResultData): ICalculationResult => {
  return {
    connectivityComponents: data.connectivityComponents,
    dimension: data.dimension,
    vectorElements: data.vectorElements,
    eccentricities: data.eccentricities.map(parseEccentricities)
  }
}

const parseAnalysisResultKey = (data: IAnalysisResultKeyData): IAnalysisResultKey => {
  return {
    name: data.name,
    value: data.value,
  }
}

const parseAnalysisResult = (data: IAnalysisResultData): IAnalysisResult => {
  return {
    isAggregated: data.isAggregated,
    keys: data.keys.map(parseAnalysisResultKey),
    result: parseCalculationResult(data.result),
  }
}

export const parseAnalysisResults = (data: Array<IAnalysisResultData>): Array<IAnalysisResult> => {
  return data.map(parseAnalysisResult)
}