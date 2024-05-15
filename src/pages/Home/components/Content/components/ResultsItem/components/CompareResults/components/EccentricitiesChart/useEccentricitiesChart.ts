import { prepareEccentricitiesChartData } from "../adapters";
import { useStoreContext } from "../../../../../../../../../../stores";

export const useEccentricitiesChart = () => {

  const { resultsStore } = useStoreContext()

  return {
    data: prepareEccentricitiesChartData(resultsStore.resultsForComparison)
  }

}