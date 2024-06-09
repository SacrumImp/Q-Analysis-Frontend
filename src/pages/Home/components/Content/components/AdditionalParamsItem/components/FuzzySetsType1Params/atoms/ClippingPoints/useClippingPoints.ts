import {
  ChangeEventHandler,
  useState,
} from "react";
import {
  FuzzySetsType1Type,
  IFuzzySetsType1RelationAdditionalParams
} from "../../../../../../../../../../classes";
import { useTypeProperties } from "../../../hooks";

export const useClippingPoints = () => {

  const {
    relationTypeClass,
    additionalParams,
  } = useTypeProperties<FuzzySetsType1Type, IFuzzySetsType1RelationAdditionalParams>()

  const [pointValue, setPointValue] = useState<number | "">(0)
  const [points, setPoints] = useState(Array.from(additionalParams.ClippingPoints).sort())

  const onChangePointValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value === "") {
      setPointValue(event.target.value)
      return
    }
    const value = parseFloat(event.target.value)
    setPointValue(value)
  }

  const onDeletePoint = (value: number) => {
    relationTypeClass.deleteClippingPoint(value)
    setPoints(Array.from(additionalParams.ClippingPoints).sort())
  }

  const onAddPoint = () => {
    if (pointValue === "") return
    relationTypeClass.addClippingPoint(pointValue)
    setPoints(Array.from(additionalParams.ClippingPoints).sort())
  }

  return {
    pointValue,
    onChangePointValue,
    points,
    onDeletePoint,
    onAddPoint,
    hasError: pointValue === "" || pointValue < 0 || pointValue > 1
  }

}