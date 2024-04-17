import { observer } from "mobx-react";
import {
  Accordion, 
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { ERelationsTypes } from "./types";
import { useRelationsTypeItem } from "./useRelationsTypeItem";

export const RelationsTypeItem = observer(() => {

  const {
    selectedValue,
    handleRelationTypeChange,
  } = useRelationsTypeItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.relationType}>
      <Accordion.Header>Relations type switch</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.RadioButton
            id='relation-type'
            label='Binary'
            name='relation-type-switch'
            value={ERelationsTypes.binary}
            onChange={handleRelationTypeChange}
            checked={selectedValue === ERelationsTypes.binary}
          />
          <Form.RadioButton
            id='relation-type'
            label='Weighted'
            name='relation-type-switch'
            value={ERelationsTypes.weighted}
            onChange={handleRelationTypeChange}
            checked={selectedValue === ERelationsTypes.weighted}
          />
          <Form.RadioButton
            id='method-switch-duckstein'
            label='tba'
            name='relation-type-switch'
            value={ERelationsTypes.tba}
            onChange={handleRelationTypeChange}
            checked={selectedValue === ERelationsTypes.tba}
            disabled
          />
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )

})