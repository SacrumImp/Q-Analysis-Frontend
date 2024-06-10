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
      $type: "Binary",
      Value: value
    }
  }

  transformValueToString = (value: boolean): string => {
    return value ? "1" : "0"
  }

  transformValueFromString(value?: string | undefined): boolean | undefined {
    if (value === undefined) return value
    else if (parseInt(value) === 1) return true
    else if (parseInt(value) === 0) return false
  }

}