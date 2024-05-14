import { observer } from "mobx-react";
import {
  Accordion,
  ButtonGroup,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import {
  AddElementButton,
  ClearElementsButton,
  ImportButton,
  ImportModal,
} from "./components";
import { EditableTable } from "../../components/EditableTable";
import { useTableItem } from "./hooks";
import { useModal } from "../../../../../../utils";
import "./styles.scss";

export const TableItem = observer(() => {

  const {
    data,
    columns,
  } = useTableItem()

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  return (
    <Accordion.Item eventKey={EAccordionItems.table}>
      <ImportModal 
        show={show}
        handleClose={handleClose}
      />
      <Accordion.Header>System's model (matrix form)</Accordion.Header>
      <Accordion.Body>
        <ButtonGroup
          className="table__buttons"
        >
          <AddElementButton/>
          <ClearElementsButton/>
          <ImportButton
            onClick={onClick}
          />
        </ButtonGroup>
        <EditableTable 
          data={data}
          columns={columns}
        />
      </Accordion.Body>      
    </Accordion.Item>
  )

})