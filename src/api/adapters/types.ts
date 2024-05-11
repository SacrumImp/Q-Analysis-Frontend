import { EMethods } from "../../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { TRow } from "../../utils/types";

export interface IRelationsInfo {
  relationsType: ERelationsTypes,
  additionalParam?: number,
}

export interface IPrepareStructureParams {
  method: EMethods,
  relationsInfo: IRelationsInfo,
  relations: Array<TRow>,
}

export interface IAnalysisStructure {
  EccentricityCalculationMethod: number,
  Simplices: Array<ISimplex>
}

export type TRelation = IBinaryRelation | IWeightedRelation

export interface ISimplex {
  Index: number,
  Relations: Array<TRelation>,
}

export interface IBinaryRelation {
  $type: string,
  Value: boolean,
}

export interface IWeightedRelation {
  $type: string,
  Value: number,
  SliceValue: number
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