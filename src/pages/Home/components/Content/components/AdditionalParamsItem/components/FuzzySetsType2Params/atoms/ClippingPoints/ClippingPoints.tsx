import { observer } from "mobx-react";
import {
  Badge,
  Button,
  EErrorTexts,
  Error,
  Form,
  InputGroup,
} from "../../../../../../../../../../uikit";
import { useClippingPoints } from "./useClippingPoints";

export const ClippingPoints = observer(() => {

  const {
    pointValue,
    onChangePointValue,
    points,
    onDeletePoint,
    onAddPoint,
    hasError,
  } = useClippingPoints()
  
  return (
    <Form.Group className="fuzzy-sets-type2-params__form-group">
      <Form.Label>
        ClippingPoints
      </Form.Label>
      <InputGroup>
        <Form.Control
          type="number"
          value={pointValue}
          onChange={onChangePointValue}
        />
        <Button
          variant="primary"
          onClick={onAddPoint}
          disabled={hasError}
        >
          Add point
        </Button>
      </InputGroup>
      <Error.Text 
        hasError={hasError}
        errorText={EErrorTexts.clippingPoint}
      />
      <div className="fuzzy-sets-type2-params__clipping-points-badges">
        {
          points.map((value, index) => {
            return (
              <h5
                key={index}
                className="fuzzy-sets-type2-params__clipping-points-badge"
              >
                <Badge
                  bg="primary"
                  hasCloseButton={points.length > 1}
                  onClose={() => onDeletePoint(value)}
                >
                  {value}
                </Badge>
              </h5>
            )
          })
        }
      </div>
    </Form.Group>
  )

})