import { prepareVectorChartData } from "../../../../../../../../../../api";
import { useStoreContext } from "../../../../../../../../../../stores";

export const useVectorChart = () => {

  const { resultsStore } = useStoreContext()

  return {
    data: prepareVectorChartData(resultsStore.resultsForComparison)
  }

}