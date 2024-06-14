import { FC } from "react";
import { observer } from "mobx-react";
import {
  BarChart,
  Text,
} from "../../../../../../../../../../uikit";
import { useVectorChart } from "./useVectorChart";
import { StringConst } from "../../../../../../../../../../utils";
import { IVectorChartProps } from "./types";
import "./styles.scss";

export const VectorChart:FC<IVectorChartProps> = observer((props) => {

  const {
    vectors,
    data,
  } = useVectorChart(props)

  return (
    <section>
      <Text
        type="h4"
      >
        {StringConst.vectorLabel}
      </Text>
      <section className="vector-chart__strings">
        {
          vectors.map((vector, index) => (
            <Text
              key={index}
              className="vector-chart__string"
            >
              {vector.name}: {vector.value}
            </Text>
          ))
        }
      </section>
      <BarChart data={data} />
    </section>
  )

})