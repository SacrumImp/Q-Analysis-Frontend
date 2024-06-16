import { observer } from "mobx-react";
import {
  ClippingPoints,
  Domain,
  MatchProportion,
} from "./atoms";
import "./styles.scss";

export const FuzzySetsType2Params = observer(() => {


  return (
    <div>
      <Domain/>
      <ClippingPoints/>
      <MatchProportion/>
    </div>
  )

})