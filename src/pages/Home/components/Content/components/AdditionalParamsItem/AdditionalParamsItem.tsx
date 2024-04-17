import { observer } from "mobx-react";
import {
  Accordion,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { ERelationsTypes } from "../RelationsTypeItem/types";
import {
  BinaryParams,
  WeightedParams,
} from "./components";
import { useAdditionalParamsItem } from "./useAdditionalParamsItem";

const getContent = (type: ERelationsTypes) => {
  switch(type) {
    case ERelationsTypes.binary:
      return <BinaryParams/>
    case ERelationsTypes.weighted:
      return <WeightedParams/>
    default:
      return <BinaryParams/>
  }
}

export const AdditionalParamsItem = observer(() => {

  const {
    relationsType
  } = useAdditionalParamsItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.additionalParams}>
      <Accordion.Header>Additional Method Params</Accordion.Header>
      <Accordion.Body>
        {getContent(relationsType)}
      </Accordion.Body>      
    </Accordion.Item>
  )

})