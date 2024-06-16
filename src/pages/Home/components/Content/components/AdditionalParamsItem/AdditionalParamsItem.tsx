import { observer } from "mobx-react";
import {
  Accordion,
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { ERelationsTypes } from "../RelationsTypeItem/types";
import {
  BinaryParams,
  FuzzySetsType1Params,
  FuzzySetsType2Params,
  UnknownParams,
  WeightedParams,
} from "./components";
import { useAdditionalParamsItem } from "./useAdditionalParamsItem";
import "./styles.scss";

const getContent = (type: ERelationsTypes) => {
  switch(type) {
    case ERelationsTypes.binary:
      return <BinaryParams/>
    case ERelationsTypes.weighted:
      return <WeightedParams/>
    case ERelationsTypes.fuzzySetsType1:
      return <FuzzySetsType1Params/>
    case ERelationsTypes.fuzzySetsType2:
      return <FuzzySetsType2Params/>
    default:
      return <UnknownParams/>
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
        <Form className="additional-params__form">
          {getContent(relationsType)}
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )

})