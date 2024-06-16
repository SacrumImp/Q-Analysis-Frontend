import {
  IBinaryRelation,
  IBinaryRelationAdditionalParams,
} from "./BinaryType";
import {
  IFuzzySetsType1Relation,
  IFuzzySetsType1RelationAdditionalParams,
} from "./FuzzySetsType1Type";
import {
  IFuzzySetsType2Relation,
  IFuzzySetsType2RelationAdditionalParams,
} from "./FuzzySetsType2Type";
import {
  IWeightedRelation,
  IWeightedRelationAdditionalParams,
} from "./WeightType";

export type TAdditionalParams = IBinaryRelationAdditionalParams | IWeightedRelationAdditionalParams | IFuzzySetsType1RelationAdditionalParams | IFuzzySetsType2RelationAdditionalParams

export type TRelation = IBinaryRelation | IWeightedRelation | IFuzzySetsType1Relation | IFuzzySetsType2Relation

export interface IDomain {
  LeftBoundary: number,
  RightBoundary: number,
}