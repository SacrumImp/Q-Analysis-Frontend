import { observer } from "mobx-react";
import {
  EErrorTexts,
  Error,
  Form,
} from "../../../../../../../../../../uikit";
import { useDomain } from "./useDomain";
import "../../styles.scss";

export const Domain = observer(() => {

  const {
    hasErrorLeft,
    hasErrorRight,
    hasDomainError,
    domainLeftBoudary,
    domainRightBoudary,
    onChangeDomainLeftBoudary,
    onChangeDomainRightBoudary,
  } = useDomain()

  return (
    <Form.Group className="fuzzy-sets-type2-params__form-group">
      <Form.Label>
        Domain
      </Form.Label>
      <Error.Text
        hasError={hasDomainError}
        errorText={EErrorTexts.domainBoundaries}
      />
      <Form.Group className="fuzzy-sets-type2-params__domain-inputs">
        <Form.Group>
          <Form.Label>
            Left Boundary
          </Form.Label>
          <Form.Control
            type="number"
            value={domainLeftBoudary}
            onChange={onChangeDomainLeftBoudary}
          />
          <Error.Text
            hasError={hasErrorLeft}
            errorText={EErrorTexts.domainBoundary}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Right Boundary
          </Form.Label>
          <Form.Control
            type="number"
            value={domainRightBoudary}
            onChange={onChangeDomainRightBoudary}
          />
          <Error.Text
            hasError={hasErrorRight}
            errorText={EErrorTexts.domainBoundary}
          />
        </Form.Group>
      </Form.Group>
    </Form.Group>
  )

})