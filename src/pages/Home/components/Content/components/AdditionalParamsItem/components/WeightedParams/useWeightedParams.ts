import { useStoreContext } from "../../../../../../../../stores";

export const useWeightedParams = () => {
  
  const { calculationsFormStore } = useStoreContext()

  const onChange = (e: any) => {
    calculationsFormStore.setSliceValue(e.target.value)
  }

  return {
    value: calculationsFormStore.sliceValue,
    onChange,
  }

}