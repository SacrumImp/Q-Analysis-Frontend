// Additional Params Interfaces

export type TAdditionalParams = IBinaryRelationAdditionalParams | IWeightedRelationAdditionalParams

export interface IBinaryRelationAdditionalParams { }

export interface IWeightedRelationAdditionalParams {
  SliceValue: number
}

// Relations Interfaces

export type TRelation = IBinaryRelation | IWeightedRelation

export interface IRelation {
  $type: string,
}

export interface IBinaryRelation extends IRelation, IBinaryRelationAdditionalParams {
  Value: boolean,
}

export interface IWeightedRelation extends IRelation, IWeightedRelationAdditionalParams {
  Value: number,
}