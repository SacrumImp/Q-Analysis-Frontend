import { ChangeEventHandler, useState } from "react";
import { useStoreContext } from "../../../../../../../../stores";
import { IWeightedRelationAdditionalParams, WeightType } from "../../../../../../../../classes";

export const useWeightedParams = () => {
  
  const { calculationsFormStore } = useStoreContext()

  const relationTypeClass = calculationsFormStore.relationsTypeProperties as WeightType
  const additionalParams = calculationsFormStore.relationsTypeProperties.getAdditionalParams() as IWeightedRelationAdditionalParams

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