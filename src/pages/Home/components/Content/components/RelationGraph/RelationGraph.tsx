import { FC } from "react";
import { observer } from "mobx-react";
import { IRelationGraphProps } from "./types";
import {
  Form,
  InputGroup,
  TrapezoidChart,
} from "../../../../../../uikit";
import { useRelationGraph } from "./useRelationGraph";
import { ElementsOptions } from "./components";
import "./styles.scss";

export const RelationGraph:FC<IRelationGraphProps> = observer((props) => {

  const {
    domain,
  } = props

  const {
    selectOptions,
    value,
    rowValue,
    columnValue,
    onChangeRowValue,
    onChangeColumnValue,
  } = useRelationGraph(props)

  return (
    <section>
      <InputGroup className="relation-graph__input-group">
        <Form.Select
          value={rowValue}
          onChange={onChangeRowValue}
        >
          <ElementsOptions values={selectOptions} />
        </Form.Select>
        <Form.Select
          value={columnValue}
          onChange={onChangeColumnValue}
        >
          <ElementsOptions values={selectOptions} />
        </Form.Select>
      </InputGroup>
      <TrapezoidChart
        value={value}
        domain={domain}
      />
    </section>
  )

})