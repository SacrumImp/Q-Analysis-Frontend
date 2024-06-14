import { prepareVectorChartData, prepareVectorsStrings } from "../adapters";
import { useStoreContext } from "../../../../../../../../../../stores";
import { IVectorChartProps } from "./types";

export const useVectorChart = (props: IVectorChartProps) => {

  const { resultsStore } = useStoreContext()
  const { colors } = props

  return {
    vectors: prepareVectorsStrings(resultsStore.resultsForComparison),
    data: prepareVectorChartData(resultsStore.resultsForComparison, colors)
  }

}