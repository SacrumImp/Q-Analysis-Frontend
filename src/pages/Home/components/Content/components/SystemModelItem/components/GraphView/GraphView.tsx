import { observer } from "mobx-react";
import {
  ButtonGroup,
} from "../../../../../../../../uikit";
import {
  ClearElementsButton,
  ImportButton,
  ImportModal,
} from "..";
import { useModal } from "../../../../../../../../utils";
import {
  RelationGraph,
} from "../../../RelationGraph";
import { useGraphView } from "./useGraphView";
import { FC } from "react";
import "./styles.scss";
import { IGraphViewProps } from "./types";

export const GraphView:FC<IGraphViewProps> = observer((props) => {

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  const {
    domain,
    data,
  } = useGraphView()

  const { 
    type = "trapezoid",
  } = props

  return (
    <section>
      <ImportModal 
        show={show}
        handleClose={handleClose}
      />
      <ButtonGroup
        className="graph-view__buttons"
      >
        <ClearElementsButton/>
        <ImportButton
          onClick={onClick}
        />
      </ButtonGroup>
      <RelationGraph
        domain={domain}
        data={data}
        type={type}
      />
    </section>
  )

})