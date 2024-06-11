import { observer } from "mobx-react";
import {
  Accordion,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import {
  DefaultView,
  GraphView,
  TableView,
} from "./components";
import { ERelationsTypes } from "../RelationsTypeItem/types";
import { useSystemModelItem } from "./useSystemModelItem";


const getContent = (type: ERelationsTypes) => {
  switch(type) {
    case ERelationsTypes.binary:
    case ERelationsTypes.weighted:
      return <TableView/>
    case ERelationsTypes.fuzzySetsType1:
      return <GraphView/>
    default:
      return <DefaultView/>
  }
}

export const SystemModelItem = observer(() => {

  const {
    type,
  } = useSystemModelItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.systemModel}>
      <Accordion.Header>System's model (matrix form)</Accordion.Header>
      <Accordion.Body>
        {getContent(type)}
      </Accordion.Body>      
    </Accordion.Item>
  )

})