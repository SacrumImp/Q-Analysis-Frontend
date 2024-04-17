import { useStoreContext } from "../../../../../../stores";

export const useAdditionalParamsItem = () => {

  const { calculationsFormStore } = useStoreContext()

  return {
    relationsType: calculationsFormStore.relationsType
  }

}