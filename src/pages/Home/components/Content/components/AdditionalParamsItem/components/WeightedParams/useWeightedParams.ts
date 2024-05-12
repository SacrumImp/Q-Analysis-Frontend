import { ChangeEventHandler } from "react";
import { useStoreContext } from "../../../../../../../../stores";

export const useWeightedParams = () => {
  
  const { calculationsFormStore } = useStoreContext()

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length === 0) return
    const value = parseInt(event.target.value)
    calculationsFormStore.setSliceValue(value)
  }

  return {
    value: calculationsFormStore.sliceValue,
    onChange,
  }

}