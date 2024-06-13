import { FC } from "react";
import {
  Modal,
  Text,
} from "../../../../../../../../../../uikit";
import { IInitialDataModal } from "./types";
import { useInitialDataModal } from "./useInitialDataModal";
import { EditableTable } from "../../../../../EditableTable";
import { AdditionalParamsTable } from "./components";
import { ERelationsTypes } from "../../../../../RelationsTypeItem/types";
import {
  TColumn,
  TRow,
} from "../../../../../../../../../../utils/types";
import "./styles.scss";
import { RelationGraph } from "../../../../../RelationGraph";
import {
  IFuzzySetsType1RelationAdditionalParams,
  RelationType,
} from "../../../../../../../../../../classes";

const getContent = (relationsTypeProperties: RelationType, columns: Array<TColumn>, rows: Array<TRow>) => {
  switch(relationsTypeProperties.type) {
    case ERelationsTypes.binary:
    case ERelationsTypes.weighted:
      return <EditableTable
                disabled
                columns={columns}
                data={rows}
              />
    case ERelationsTypes.fuzzySetsType1:
      const additionalParams = relationsTypeProperties.getAdditionalParams() as IFuzzySetsType1RelationAdditionalParams
      return <RelationGraph
                domain={additionalParams.Domain}
                data={rows}
             />
    default:
      return null
  }
}

export const InitialDataModal:FC<IInitialDataModal> = (props) => {

  const {
    show,
    handleClose,
    systemStructure,
    name,
    relationsTypeProperties,
  } = props

  const {
    columns,
    rows,
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
          {getContent(relationsTypeProperties, columns, rows)}
        </section>
      </Modal.Body>
    </Modal>
  )

}