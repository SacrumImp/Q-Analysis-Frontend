import {
  IPrepareStructureParams,
  IAnalysisStructure,
  ISimplex,
  IRelation,
  IAnalysisResultData,
  IAnalysisResult,
  IEccentricitiesData,
  IEccentricities,
} from "./types";

export const prepareStructure = (params: IPrepareStructureParams): IAnalysisStructure => {

  const {
    method,
    relationsType,
    relations,
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
      const relation: IRelation = {
        $type: relationsType,
        Value: relations[i][j] > 0
      }
      simplex.Relations.push(relation)
    }

    data.Simplices.push(simplex)
  }

  return data

}

export const parseEccentricities = (data: IEccentricitiesData): IEccentricities => {
  return {
    simplexIndex: data.simplexIndex,
    value: data.value,
    isTotallyDisconnected: data.isTotallyDisconnected,
  }
}

export const parseAnalysisResult = (data: IAnalysisResultData): IAnalysisResult => {
  return {
    dimension: data.dimension,
    vectorElements: data.vectorElements,
    eccentricities: data.eccentricities.map(parseEccentricities)
  }
}