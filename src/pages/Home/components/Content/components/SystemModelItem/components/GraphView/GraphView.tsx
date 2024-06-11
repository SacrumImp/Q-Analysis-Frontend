import { observer } from "mobx-react";
import {
  ButtonGroup,
  Form,
  InputGroup,
} from "../../../../../../../../uikit";
import {
  ClearElementsButton,
  ImportButton,
  ImportModal,
} from "../../components";
import { useModal } from "../../../../../../../../utils";
import { useGraphView } from "./useGraphView";
import {
  ElementsOptions,
  RelationGraph,
} from "./components";
import "./styles.scss";

export const GraphView = observer(() => {

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  const {
    selectOptions,
    data,
    rowValue,
    columnValue,
    onChangeRowValue,
    onChangeColumnValue,
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
      <InputGroup className="graph-view__input-group">
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
      <RelationGraph value={data || null}/>
    </section>
  )

})