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
  const [result, setResult] = useState<IAnalysisResult | null>()
  const [err, setErr] = useState('')
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
      setResult(result)
      setErr('')
      resultsStore.addResult({
        systemStructure: structureParams,
        calculationResults: result,
      })
    }
    catch {
      setErr('Unexpected error')
      setResult(null)
    }
    finally {
      setIsLoading(false)
    }
  }
  
  return {
    onClick,
    result,
    err,
    isLoading,
  }

}