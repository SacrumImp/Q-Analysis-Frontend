import { useStoreContext } from "../../../../../../../../stores";
import { getRandomHexColor } from "../../../../../../../../utils";

export const useCompareResults = () => {

  const { resultsStore } = useStoreContext()

  const deleteResult = (id: number) => {
    resultsStore.changePresenceInComparison(id, false)
  }

  return {
    results: resultsStore.resultsForComparison,
    colors: resultsStore.resultsForComparison.map(_ => getRandomHexColor()),
    deleteResult
  }

}