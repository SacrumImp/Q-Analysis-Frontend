import {
  ChangeEventHandler,
  useState,
} from "react";
import {
  FuzzySetsType2Type,
  IFuzzySetsType2RelationAdditionalParams
} from "../../../../../../../../../../classes";
import { useTypeProperties } from "../../../hooks";

export const useClippingPoints = () => {

  const {
    relationTypeClass,
    additionalParams,
  } = useTypeProperties<FuzzySetsType2Type, IFuzzySetsType2RelationAdditionalParams>()

  const [pointValue, setPointValue] = useState<number | "">(0)
  const [points, setPoints] = useState(additionalParams.ClippingPoints)

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
    setPoints((prevArray) => prevArray.filter(item => item !== value));
  }

  const onAddPoint = () => {
    if (pointValue === "") return
    relationTypeClass.addClippingPoint(pointValue)
    setPoints((prevArray) => [...prevArray, pointValue]);
  }

  return {
    pointValue,
    onChangePointValue,
    points: Array.from(points).sort(),
    onDeletePoint,
    onAddPoint,
    hasError: pointValue === "" || pointValue < 0 || pointValue > 1
  }

}