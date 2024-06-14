import { ERelationsTypes } from "../../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { TData } from "../../../utils/types";
import {
  TAdditionalParams,
  TRelation,
} from "../types";

export abstract class RelationType {

  protected _type: ERelationsTypes

  constructor() {
    this._type = ERelationsTypes.binary
  }

  /** Getter for specific default value (mostly for editable table or relation that isn't set) */
  abstract getDefaultValue(): TData;

  /** Getter for all additional params for further calculations */
  abstract getAdditionalParams(): TAdditionalParams;

  /** Getter for structure of relation with value enriched by additional params */
  abstract getRelationWithValue(value: TData): TRelation;

  /** Transformer for getting string value */
  abstract transformValueToString(value: TData): string | undefined;

  /** Transformer for getting value from string */
  abstract transformValueFromString(value?: string): TData | undefined;

  /** Validator for relation values (mainly for imported tables) */
  abstract validateValue(value: any): boolean;

  get type(): ERelationsTypes {
    return this._type
  }

}