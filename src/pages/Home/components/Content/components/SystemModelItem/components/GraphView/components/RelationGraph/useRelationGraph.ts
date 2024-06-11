import { IFuzzySetsType1RelationAdditionalParams } from "../../../../../../../../../../classes";
import { useStoreContext } from "../../../../../../../../../../stores";

export const useRelationGraph = () => {

  const { calculationsFormStore } = useStoreContext()

  const additionalParams = calculationsFormStore.relationsTypeProperties.getAdditionalParams() as IFuzzySetsType1RelationAdditionalParams

  return {
    domain: additionalParams.Domain,
  }

}