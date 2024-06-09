import { IRelation } from "../RelationType";

export interface IWeightedRelationAdditionalParams {
  SliceValue: number
}

export interface IWeightedRelation extends IRelation, IWeightedRelationAdditionalParams {
  Value: number,
}