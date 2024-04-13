import { makeAutoObservable } from "mobx";
import { EMethods } from "../pages/Home/components/Content/components/MethodItem/types";
import { ERelationsTypes } from "../pages/Home/components/Content/components/RelationsTypeItem/types";

class CalculationsFormStore {
  
  private _method: EMethods = EMethods.Casti;
  private _relationsType: ERelationsTypes = ERelationsTypes.binary;

  constructor() {
    makeAutoObservable(this);
  }

  get method(): EMethods {
    return this._method
  }

  get relationsType(): ERelationsTypes {
    return this._relationsType
  }

  setMethod = (value: EMethods) => {
    this._method = value
  }

  setRelationsType = (value: ERelationsTypes) => {
    this._relationsType = value
  }

}

export const calculationsFormStore = new CalculationsFormStore();