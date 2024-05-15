import {
  Text,
  LineChart,
} from "../../../../../../../../../../uikit";
import { useEccentricitiesChart } from "./useEccentricitiesChart";

export const EccentricitiesChart = () => {

  const { data } = useEccentricitiesChart()

  return (
    <section>
      <Text
        type="h4"
      >
        Eccentricities
      </Text>
      <LineChart data={data}/>
    </section>
  )

}