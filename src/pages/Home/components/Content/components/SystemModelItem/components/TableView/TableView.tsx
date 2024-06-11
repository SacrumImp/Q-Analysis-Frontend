import { observer } from "mobx-react";
import { ButtonGroup } from "../../../../../../../../uikit";
import { EditableTable } from "../../../EditableTable";
import {
  AddElementButton,
} from "./components";
import {
  ImportButton,
  ImportModal,
  ClearElementsButton,
} from "../../components";
import { useTableView } from "./useTableView";
import { useModal } from "../../../../../../../../utils";
import "./styles.scss";

export const TableView = observer(() => {

  const {
    data,
    columns,
  } = useTableView()

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  return (
    <section>
      <ImportModal 
        show={show}
        handleClose={handleClose}
      />
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
    </section>
  )

})