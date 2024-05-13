import { useState } from "react";
import {
  EApiRoutes,
  axiosInstance,
  parseAnalysisResult,
  prepareStructure
} from "../../../../../../api";
import { useStoreContext } from "../../../../../../stores";
import { IAnalysisResult } from "../../../../../../api/adapters/types";

export const useResultItem = () => {

  const {
    calculationsFormStore,
    resultsStore,
  } = useStoreContext()
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)
    const structureParams = prepareStructure({
      method: calculationsFormStore.method,
      relationsInfo: {
        relationsType: calculationsFormStore.relationsType,
        additionalParam: calculationsFormStore.sliceValue,
      },
      relations: calculationsFormStore.data,
    })
    try {
      const { data } = await axiosInstance.post(EApiRoutes.analysis, structureParams)
      const result = parseAnalysisResult(data)
      resultsStore.addResult({
        isError: false,
        systemStructure: structureParams,
        calculationResults: result,
      })
    }
    catch {
      resultsStore.addResult({
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