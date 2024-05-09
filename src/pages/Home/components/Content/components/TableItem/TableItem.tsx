import { observer } from "mobx-react";
import {
  Accordion,
  ButtonGroup,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import {
  AddElementButton,
  ClearElementsButton,
  EditableTable,
} from "./components";
import { useTableItem } from "./useTableItem";
import "./styles.scss";

export const TableItem = observer(() => {

  const {
    data,
    columns,
  } = useTableItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.table}>
      <Accordion.Header>System's model (matrix form)</Accordion.Header>
      <Accordion.Body>
        <ButtonGroup
          className="table__buttons"
        >
          <AddElementButton/>
          <ClearElementsButton/>
        </ButtonGroup>
        <EditableTable 
          data={data}
          columns={columns}
        />
      </Accordion.Body>      
    </Accordion.Item>
  )

})