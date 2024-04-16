import { EMethods } from "../../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";

export interface IPrepareStructureParams {
  method: EMethods,
  relationsType: ERelationsTypes,
  relations: Array<Array<number>>,
}

export interface IAnalysisStructure {
  EccentricityCalculationMethod: number,
  Simplices: Array<ISimplex>
}

export interface ISimplex {
  Index: number,
  Relations: Array<IRelation>,
}

export type TRelatonValue = boolean

export interface IRelation {
  $type: string,
  Value: TRelatonValue,
}

export interface IEccentricitiesData {
  simplexIndex: number,
  value: number,
  isTotallyDisconnected: boolean,
}

export interface IEccentricities {
  simplexIndex: number,
  value: number,
  isTotallyDisconnected: boolean,
}

export interface IAnalysisResultData {
  dimension: number,
  vectorElements: string,
  eccentricities: Array<IEccentricitiesData>,
}

export interface IAnalysisResult {
  dimension: number,
  vectorElements: string,
  eccentricities: Array<IEccentricitiesData>,
}