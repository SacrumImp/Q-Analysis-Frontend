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
  const [result, setResult] = useState<IAnalysisResult>()

  const onClick = async () => {
    const structureParams = prepareStructure({
      method: calculationsFormStore.method,
      relationsType: calculationsFormStore.relationsType, 
      relations: calculationsFormStore.data,
    })
    const { data } = await axiosInstance.post(EApiRoutes.analysis, structureParams)
    setResult(parseAnalysisResult(data))
  }
  
  return {
    onClick,
    result,
  }

}