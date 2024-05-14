import { useStoreContext } from "../../../../../../../../stores";

export const usePreviousResultsList = () => {

  const { resultsStore } = useStoreContext()
  
  return {
    results: resultsStore.successfulResults.slice(0, -1),
    count: resultsStore.resultsCount,
  }

}