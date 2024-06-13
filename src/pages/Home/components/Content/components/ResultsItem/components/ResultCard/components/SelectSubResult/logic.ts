import { IAnalysisResultKey } from "../../../../../../../../../../api/adapters/types";

export const mergeKeys = (keys: Array<IAnalysisResultKey>, isAggregated: boolean): string => {
  if (isAggregated) return "Aggregated"
  const stringsKeys = keys.map(key => {
    return `${key.name}: ${key.value}` 
  })
  return stringsKeys.join(", ")
}