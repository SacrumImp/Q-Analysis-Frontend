import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { TData } from "../../utils/types";

export abstract class RelationType {

  protected _type: ERelationsTypes

  constructor() {
    this._type = ERelationsTypes.binary
  }

  abstract getDefaultValue(): TData;

  get type(): ERelationsTypes {
    return this._type
  }

}