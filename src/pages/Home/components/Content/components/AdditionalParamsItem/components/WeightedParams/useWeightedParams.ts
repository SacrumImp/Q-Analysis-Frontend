import {
  ChangeEventHandler,
  useState,
} from "react";
import {
  IWeightedRelationAdditionalParams,
  WeightType,
} from "../../../../../../../../classes";
import { useTypeProperties } from "../hooks";

export const useWeightedParams = () => {

  const {
    relationTypeClass,
    additionalParams,
  } = useTypeProperties<WeightType, IWeightedRelationAdditionalParams>()

  const [value, setValue] = useState<number>(additionalParams.SliceValue)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length === 0) return
    const value = parseInt(event.target.value)
    setValue(value)
    relationTypeClass.setSliceValue(value)
  }

  return {
    value,
    onChange,
  }

}