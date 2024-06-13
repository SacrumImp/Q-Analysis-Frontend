import { observer } from "mobx-react";
import {
  BarChart,
  Text,
} from "../../../../../../../../../../uikit";
import { useVectorChart } from "./useVectorChart";
import { StringConst } from "../../../../../../../../../../utils";

export const VectorChart = observer(() => {

  const {
    data,
  } = useVectorChart()

  return (
    <section>
      <Text
        type="h4"
      >
        {StringConst.vectorLabel}
      </Text>
      <BarChart data={data} />
    </section>
  )

})