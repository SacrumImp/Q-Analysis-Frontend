import { observer } from "mobx-react";
import {
  ClippingPoints,
  Domain,
  MatchProportion,
} from "./atoms";
import "./styles.scss";

export const FuzzySetsType1Params = observer(() => {


  return (
    <div>
      <Domain/>
      <ClippingPoints/>
      <MatchProportion/>
    </div>
  )

})