import { useStoreContext } from "../../../../../../../../stores";
import { exportCalculationsToXLSX } from "../../../../../../../../utils";

export const useExportResultButton = () => {

  const { resultsStore } = useStoreContext()

  const onClick = () => {
    if (!resultsStore.hasResultForExport) return
    exportCalculationsToXLSX(resultsStore.currentResult)
  }

  return {
    isDisabled: !resultsStore.hasResultForExport,
    onClick,
  }

}