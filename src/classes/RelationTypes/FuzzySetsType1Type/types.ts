import { IRelation } from "../RelationType";
import { IDomain } from "../types";

export interface IFuzzySetsType1RelationAdditionalParams {
  Domain: IDomain,
  ClippingPoints: Array<number>,
  MatchProportion: number,
}

export interface ITrapezoid {
  LeftBottomPoint: number,
  LeftTopPoint: number,
  RightBottomPoint: number,
  RightTopPoint: number,
}

export type TTrapezoid = ITrapezoid | null

export interface IFuzzySetsType1Relation extends IRelation, IFuzzySetsType1RelationAdditionalParams {
  Value: TTrapezoid,
}