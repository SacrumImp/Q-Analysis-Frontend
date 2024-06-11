import { FC } from "react";
import { observer } from "mobx-react";
import { IRelationGraphProps } from "./types";
import { TrapezoidChart } from "../../../../../../../../../../uikit";
import { useRelationGraph } from "./useRelationGraph";

export const RelationGraph:FC<IRelationGraphProps> = observer((props) => {

  const {
    value,
  } = props

  const {
    domain,
  } = useRelationGraph()

  return (
    <section>
      <TrapezoidChart
        value={value}
        domain={domain}
      />
    </section>
  )

})