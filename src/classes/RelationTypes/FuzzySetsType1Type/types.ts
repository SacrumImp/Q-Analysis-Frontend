import { IRelation } from "../RelationType";

export interface IDomain {
  LeftBoundary: number,
  RightBoundary: number,
}

export interface IFuzzySetsType1RelationAdditionalParams {
  Domain: IDomain,
  ClippingPoints: Set<number>,
  MatchProportion: number,
}

export interface ITrapezoid {
  LeftBottomPart: number,
  LeftTopPart: number,
  RightBottomPart: number,
  RightTopPart: number,
}

export type TTrapezoid = ITrapezoid | null

export interface IFuzzySetsType1Relation extends IRelation, IFuzzySetsType1RelationAdditionalParams {
  Value: TTrapezoid,
}