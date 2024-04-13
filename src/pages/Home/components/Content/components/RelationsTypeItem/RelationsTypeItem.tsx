import {
  Accordion, 
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { ERelationTypes } from "./types";
import { useRelationsTypeItem } from "./useRelationsTypeItem";

export const RelationsTypeItem = () => {

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
            value={ERelationTypes.binary}
            onChange={handleRelationTypeChange}
            checked={selectedValue === ERelationTypes.binary}
          />
          <Form.RadioButton
            id='method-switch-duckstein'
            label='tba'
            name='relation-type-switch'
            value={''}
            onChange={handleRelationTypeChange}
            checked={selectedValue === ''}
            disabled
          />
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )

}