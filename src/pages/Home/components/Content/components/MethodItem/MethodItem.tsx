import {
  Accordion, 
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { EMethods } from "./types";
import { useMethodItem } from "./useMethodItem";

export const MethodItem = () => {

  const {
    selectedValue,
    handleMethodChange,
  } = useMethodItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.method}>
      <Accordion.Header>Method switch</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.RadioButton
            id='method-switch-casti'
            label='Casti'
            name='method-switch'
            value={EMethods.Casti}
            onChange={handleMethodChange}
            checked={selectedValue === EMethods.Casti}
          />
          <Form.RadioButton
            id='method-switch-duckstein'
            label='Duckstein'
            name='method-switch'
            value={EMethods.Duckstein}
            onChange={handleMethodChange}
            checked={selectedValue === EMethods.Duckstein}
          />
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )
}