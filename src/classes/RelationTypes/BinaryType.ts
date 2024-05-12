import { ERelationsTypes } from "../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "./RelationType";

export class BinaryType extends RelationType {

  constructor() {
    super()
    this._type = ERelationsTypes.binary
  }

  getDefaultValue = () => {
    return false
  }

}