import { ERelationsTypes } from "../../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "../RelationType";
import {
  IBinaryRelation,
  IBinaryRelationAdditionalParams,
} from "./types";

export class BinaryType extends RelationType {

  constructor() {
    super()
    this._type = ERelationsTypes.binary
  }

  getDefaultValue = (): boolean => {
    return false
  }

  getAdditionalParams = (): IBinaryRelationAdditionalParams => {
    return {}
  }

  getRelationWithValue = (value: boolean): IBinaryRelation => {
    return {
      $type: this._type,
      Value: value
    }
  }

  transformValueToString = (value: boolean): string => {
    return value.toString()
  }

}