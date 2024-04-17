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

  const { calculationsFormStore } = useStoreContext()
  const [result, setResult] = useState<IAnalysisResult | null>()
  const [err, setErr] = useState('')

  const onClick = async () => {
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
      setResult(parseAnalysisResult(data))
      setErr('')
    }
    catch {
      setErr('Unexpected error')
      setResult(null)
    }
  }
  
  return {
    onClick,
    result,
    err,
  }

}