import {
  RelationType,
  TRelation,
} from "../../classes";
import { EMethods } from "../../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { TRow } from "../../utils/types";

export interface IRelationsInfo {
  relationsType: ERelationsTypes,
  additionalParam?: number,
}

export interface IPrepareStructureParams {
  method: EMethods,
  relationsTypeProperties: RelationType
  relations: Array<TRow>,
}

export interface IAnalysisStructure {
  EccentricityCalculationMethod: number,
  Simplices: Array<ISimplex>
}

export interface ISimplex {
  Index: number,
  Relations: Array<TRelation>,
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

export interface IVectorResults {
  dimension: number,
  name: string,
  vectorValues: Array<number>,
}