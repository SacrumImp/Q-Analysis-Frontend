import { observer } from "mobx-react";
import {
  Accordion, 
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import {
  CastiRadioButton,
  DucksteinRadioButton,
} from "./components";
import { StringConst } from "../../../../../../utils";

export const MethodItem = observer(() => {

  return (
    <Accordion.Item eventKey={EAccordionItems.method}>
      <Accordion.Header>{StringConst.calculationApproachLabel} selector</Accordion.Header>
      <Accordion.Body>
        <Form>
          <CastiRadioButton />
          <DucksteinRadioButton />
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )
})