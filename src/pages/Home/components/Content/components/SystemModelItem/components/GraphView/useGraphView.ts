import { IFuzzySetsType1RelationAdditionalParams } from "../../../../../../../../classes";
import { useStoreContext } from "../../../../../../../../stores";

export const useGraphView = () => {

  const { calculationsFormStore } = useStoreContext()

  const additionalParams = calculationsFormStore.relationsTypeProperties.getAdditionalParams() as IFuzzySetsType1RelationAdditionalParams

  return {
    domain: additionalParams.Domain,
    data: calculationsFormStore.data,
  }

}