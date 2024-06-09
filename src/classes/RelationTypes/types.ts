import {
  IBinaryRelation,
  IBinaryRelationAdditionalParams,
} from "./BinaryType";
import {
  IFuzzySetsType1Relation,
  IFuzzySetsType1RelationAdditionalParams,
} from "./FuzzySetsType1Type";
import {
  IWeightedRelation,
  IWeightedRelationAdditionalParams,
} from "./WeightType";

export type TAdditionalParams = IBinaryRelationAdditionalParams | IWeightedRelationAdditionalParams | IFuzzySetsType1RelationAdditionalParams

export type TRelation = IBinaryRelation | IWeightedRelation | IFuzzySetsType1Relation
