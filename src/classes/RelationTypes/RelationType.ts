import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { TData } from "../../utils/types";
import {
  TAdditionalParams,
  TRelation,
} from "./types";

export abstract class RelationType {

  protected _type: ERelationsTypes

  constructor() {
    this._type = ERelationsTypes.binary
  }

  abstract getDefaultValue(): TData;

  abstract getAdditionalParams(): TAdditionalParams;

  abstract getRelationWithValue(value: TData): TRelation;

  get type(): ERelationsTypes {
    return this._type
  }

}