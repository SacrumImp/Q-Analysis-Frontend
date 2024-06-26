import { ERelationsTypes } from "../../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "../RelationType";
import {
  IWeightedRelation,
  IWeightedRelationAdditionalParams,
} from "./types";

export class WeightType extends RelationType {

  private _sliceValue: number = 0

  constructor() {
    super()
    this._type = ERelationsTypes.weighted
  }

  getDefaultValue = (): number => {
    return 0
  }

  setSliceValue = (value: number) => {
    this._sliceValue = value
  }

  getAdditionalParams(): IWeightedRelationAdditionalParams {
    return {
      SliceValue: this._sliceValue
    }
  }

  getRelationWithValue = (value: number): IWeightedRelation => {
    return {
      $type: "Weighted",
      Value: value,
      SliceValue: this._sliceValue
    }
  }

  transformValueToString = (value: number): string | undefined => {
    return value.toString()
  }

  transformValueFromString(value?: string | undefined): number | undefined {
    if (value === undefined) return value
    else return parseFloat(value)
  }

  validateValue(value: any): boolean {
    return value !== undefined && !isNaN(parseFloat(value))
  }

}