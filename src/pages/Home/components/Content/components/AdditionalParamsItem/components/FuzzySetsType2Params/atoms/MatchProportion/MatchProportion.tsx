import { observer } from "mobx-react";
import {
  EErrorTexts,
  Error,
  Form,
} from "../../../../../../../../../../uikit";
import { useMatchProportion } from "./useMatchProportion";

export const MatchProportion = observer(() => {

  const {
    value,
    hasError,
    onChange,
  } = useMatchProportion()

  return (
    <Form.Group className="fuzzy-sets-type2-params__form-group">
      <Form.Label>
        Match Proportion (%)
      </Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={onChange}
      />
      <Error.Text
        hasError={hasError}
        errorText={EErrorTexts.matchProportion}
      />
    </Form.Group>
  )

})