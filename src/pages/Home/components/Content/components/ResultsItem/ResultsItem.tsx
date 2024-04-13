import { observer } from "mobx-react";
import {
  Accordion,
  Button,
  EButtonVariants,
  Text,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { useResultItem } from "./useResultItem";

export const ResultsItem = observer(() => {
 
  const {
    result,
    onClick,
  } = useResultItem()

  return(
    <Accordion.Item eventKey={EAccordionItems.results}>
      <Accordion.Header>Results</Accordion.Header>
      <Accordion.Body>
        {
          result ?
          <>
            <Text>
              <b>Dimension:</b> {result.dimension}
            </Text>
            <Text>
              <b>Vector:</b> {result.vectorElements}
            </Text>
          </>
          :
          null
        }
        <Button
          variant={EButtonVariants.primary}
          onClick={onClick}
        >
          Perform calculations
        </Button>
      </Accordion.Body>      
    </Accordion.Item>
  )

})