import { IRelation } from "../RelationType";
import { IDomain } from "../types";

export interface ITrapezoidSegments {
  LeftBottomPoint: ISegment,
  LeftTopPoint: ISegment,
  RightBottomPoint: ISegment,
  RightTopPoint: ISegment,
}

export interface ISegment {
  LeftBoundary: number,
  RightBoundary: number,
}

export type TTrapezoidSegments = ITrapezoidSegments | null

export interface IFuzzySetsType2RelationAdditionalParams {
  Domain: IDomain,
  ClippingPoints: Array<number>,
  MatchProportion: number,
}

export interface IFuzzySetsType2Relation extends IRelation, IFuzzySetsType2RelationAdditionalParams {
  Value: TTrapezoidSegments,
}