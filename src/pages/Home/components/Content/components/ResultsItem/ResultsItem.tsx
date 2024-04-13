import { observer } from "mobx-react";
import {
  Accordion,
  Button,
  EButtonVariants,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";

export const ResultsItem = observer(() => {
 
  return(
    <Accordion.Item eventKey={EAccordionItems.results}>
      <Accordion.Header>Results</Accordion.Header>
      <Accordion.Body>
        <Button
          variant={EButtonVariants.primary}
        >
          Perform calculations
        </Button>
      </Accordion.Body>      
    </Accordion.Item>
  )

})