import { FC } from "react";
import { observer } from "mobx-react";
import {
  Text,
  BarChart,
} from "../../../../../../../../../../uikit";
import { useEccentricitiesChart } from "./useEccentricitiesChart";
import { IEccentricitiesChartProps } from "./types";

export const EccentricitiesChart:FC<IEccentricitiesChartProps> = observer((props) => {

  const { data } = useEccentricitiesChart(props)

  return (
    <section>
      <Text
        type="h4"
      >
        Eccentricities
      </Text>
      <BarChart data={data}/>
    </section>
  )

})