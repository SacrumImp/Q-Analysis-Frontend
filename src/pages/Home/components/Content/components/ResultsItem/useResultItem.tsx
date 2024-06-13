import { useState } from "react";
import {
  EApiRoutes,
  axiosInstance,
  parseAnalysisResults,
  prepareStructure
} from "../../../../../../api";
import { useStoreContext } from "../../../../../../stores";
import { getDefaultResultName } from "../../../../../../utils";

export const useResultItem = () => {

  const {
    calculationsFormStore,
    resultsStore,
  } = useStoreContext()
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)
    const structureParams = prepareStructure({
      relationsTypeProperties: calculationsFormStore.relationsTypeProperties,
      method: calculationsFormStore.method,
      relations: calculationsFormStore.data,
    })
    try {
      const { data } = await axiosInstance.post(EApiRoutes.analysis, structureParams)
      const result = parseAnalysisResults(data)
      resultsStore.addResult({
        name: getDefaultResultName(),
        relationTypeProperties: calculationsFormStore.relationsTypeProperties,
        isError: false,
        systemStructure: structureParams,
        calculationResults: result,
      })
    }
    catch {
      resultsStore.addResult({
        name: getDefaultResultName(),
        relationTypeProperties: calculationsFormStore.relationsTypeProperties,
        isError: true,
        errorText: "Unexpected error",
        systemStructure: structureParams
      })
    }
    finally {
      setIsLoading(false)
    }
  }
  
  return {
    onClick,
    result: resultsStore.currentResult,
    isLoading,
  }

}