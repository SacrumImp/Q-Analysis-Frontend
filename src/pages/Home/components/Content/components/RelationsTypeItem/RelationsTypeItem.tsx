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
      <Accordion.Header>Type of system's model selector</Accordion.Header>
      <Accordion.Body>
        <Form>
          {
            Object.values(ERelationsTypes).map((value, key) => {
              return (
                <Form.RadioButton
                  key={key}
                  id='relation-type'
                  label={value}
                  name='relation-type-switch'
                  value={value}
                  onChange={handleRelationTypeChange}
                  checked={selectedValue === value}
                  disabled={value === ERelationsTypes.tba}
                />
              )
            })
          }
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )

})