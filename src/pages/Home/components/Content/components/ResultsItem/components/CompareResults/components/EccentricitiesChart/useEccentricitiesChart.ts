import { prepareEccentricitiesChartData } from "../adapters";
import { useStoreContext } from "../../../../../../../../../../stores";
import { IEccentricitiesChartProps } from "./types";

export const useEccentricitiesChart = (props: IEccentricitiesChartProps) => {

  const { resultsStore } = useStoreContext()
  const { colors } = props

  return {
    data: prepareEccentricitiesChartData(resultsStore.resultsForComparison, colors)
  }

}