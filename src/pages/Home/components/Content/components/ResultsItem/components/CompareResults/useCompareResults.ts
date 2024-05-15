import { useStoreContext } from "../../../../../../../../stores";

export const useCompareResults = () => {

  const { resultsStore } = useStoreContext()

  const deleteResult = (id: number) => {
    resultsStore.changePresenceInComparison(id, false)
  }

  return {
    results: resultsStore.resultsForComparison,
    deleteResult
  }

}