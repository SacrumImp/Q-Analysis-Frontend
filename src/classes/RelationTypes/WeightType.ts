import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "./RelationType";

export class WeightType extends RelationType {

  constructor() {
    super()
    this._type = ERelationsTypes.weighted
  }

  getDefaultValue = () => {
    return 0
  }

}