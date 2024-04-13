import {
  IPrepareStructureParams,
  IAnalysisStructure,
  ISimplex,
  IRelation,
  IAnalysisResultData,
  IAnalysisResult,
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

    for (let j = 0; j < relations.length; j++ ) {
      const relation: IRelation = {
        $type: relationsType,
        Value: relations[i][j] === 1
      }
      simplex.Relations.push(relation)
    }

    data.Simplices.push(simplex)
  }

  return data

}

export const parseAnalysisResult = (data: IAnalysisResultData): IAnalysisResult => {
  return {
    dimension: data.dimension,
    vectorElements: data.vectorElements,
  }
}