import { observer } from "mobx-react";
import {
  Accordion, 
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import {
  EMethods,
  MethodsLabels,
} from "./types";
import { useMethodItem } from "./useMethodItem";

export const MethodItem = observer(() => {

  const {
    selectedValue,
    handleMethodChange,
  } = useMethodItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.method}>
      <Accordion.Header>Eccentricity calculation approach selector</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.RadioButton
            id='method-switch-casti'
            label={MethodsLabels.get(EMethods.Casti)}
            name='method-switch'
            value={EMethods.Casti}
            onChange={handleMethodChange}
            checked={selectedValue === EMethods.Casti}
          />
          <Form.RadioButton
            id='method-switch-duckstein'
            label={MethodsLabels.get(EMethods.Duckstein)}
            name='method-switch'
            value={EMethods.Duckstein}
            onChange={handleMethodChange}
            checked={selectedValue === EMethods.Duckstein}
          />
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )
})