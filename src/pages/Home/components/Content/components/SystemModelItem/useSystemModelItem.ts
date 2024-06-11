import { useStoreContext } from "../../../../../../stores";

export const useSystemModelItem = () => {

  const { calculationsFormStore } = useStoreContext()

  return {
    type: calculationsFormStore.relationsType
  }

}