import { IRelation } from "../RelationType";

export interface IBinaryRelationAdditionalParams { }

export interface IBinaryRelation extends IRelation, IBinaryRelationAdditionalParams {
  Value: boolean,
}