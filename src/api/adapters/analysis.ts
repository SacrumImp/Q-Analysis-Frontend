import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import {
  IPrepareStructureParams,
  IAnalysisStructure,
  ISimplex,
  IAnalysisResultData,
  IAnalysisResult,
  IEccentricitiesData,
  IEccentricities,
  IWeightedRelation,
  IBinaryRelation,
} from "./types";

export const prepareStructure = (params: IPrepareStructureParams): IAnalysisStructure => {

  const {
    method,
    relationsInfo,
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

      switch(relationsInfo.relationsType) {
        case ERelationsTypes.binary:
          const binaryRelation: IBinaryRelation = {
            $type: relationsInfo.relationsType,
            Value: relations[i][j] > 0
          }
          simplex.Relations.push(binaryRelation)
          break;
        case ERelationsTypes.weighted:
          const weightedRelation: IWeightedRelation = {
            $type: relationsInfo.relationsType,
            Value: relations[i][j],
            SliceValue: relationsInfo.additionalParam || 0,
          }
          simplex.Relations.push(weightedRelation)
          break;
      }
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