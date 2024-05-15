import { observer } from "mobx-react";
import {
  BarChart,
  Text,
} from "../../../../../../../../../../uikit";
import { useVectorChart } from "./useVectorChart";

export const VectorChart = observer(() => {

  const {
    data,
  } = useVectorChart()

  return (
    <section>
      <Text
        type="h4"
      >
        Vector
      </Text>
      <BarChart data={data} />
    </section>
  )

})