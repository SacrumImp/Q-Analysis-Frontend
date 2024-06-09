import { useStoreContext } from "../../../../../../../../stores";

export const useTypeProperties = <T1, T2>() => {

  const { calculationsFormStore } = useStoreContext()

  const relationTypeClass = calculationsFormStore.relationsTypeProperties as T1
  const additionalParams = calculationsFormStore.relationsTypeProperties.getAdditionalParams() as T2

  return {
    relationTypeClass,
    additionalParams,
  }

}