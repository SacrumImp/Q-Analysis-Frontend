import { FC } from "react";
import {
  Modal,
  Text,
} from "../../../../../../../../../../uikit";
import { IInitialDataModal } from "./types";
import { useInitialDataModal } from "./useInitialDataModal";
import { EditableTable } from "../../../../../EditableTable";
import { AdditionalParamsTable } from "./components";
import "./styles.scss";

export const InitialDataModal:FC<IInitialDataModal> = (props) => {

  const {
    show,
    handleClose,
    systemStructure,
    name,
    relationsTypeProperties,
  } = props

  const {
    tableData,
    eccentricityCalculationApproach,
  } = useInitialDataModal(systemStructure)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="initial-data-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Initial Data for: {name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section>
          <Text>
            Eccentricity calculation approach: {eccentricityCalculationApproach}
          </Text>
        </section>
        <AdditionalParamsTable additionalParams={relationsTypeProperties.getAdditionalParams()} />
        <section>
          <Text>
            System's model:
          </Text>
          <EditableTable
            {...tableData}
          />
        </section>
      </Modal.Body>
    </Modal>
  )

}