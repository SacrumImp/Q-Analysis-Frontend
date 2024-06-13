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
import "./styles.scss";

export const GraphView = observer(() => {

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  const {
    domain,
    data,
  } = useGraphView()

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
      />
    </section>
  )

})