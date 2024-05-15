import { observer } from "mobx-react";
import {
  Accordion,
  Text,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { useResultItem } from "./useResultItem";
import {
  CompareResults,
  PerformCalculationsButton,
  PreviousResultsList,
  ResultCard,
} from "./components";
import { ICalculationResult } from "../../../../../../utils/types";
import "./styles.scss";

const getContent = (result: ICalculationResult | null, isLoading: boolean) => {
  if (result === null || isLoading) return null
  else {
    return (
      <section>
        <hr/>
        <Text type="h3">Current Result</Text>
        <hr/>
        <ResultCard
          {...result}
        />
      </section>
    )
  }
}

export const ResultsItem = observer(() => {
 
  const {
    result,
    onClick,
    isLoading,
  } = useResultItem()

  return(
    <Accordion.Item eventKey={EAccordionItems.results}>
      <Accordion.Header>Results</Accordion.Header>
      <Accordion.Body>
        <section className="result-item__sections">
          <PerformCalculationsButton
            disabled={isLoading}
            isLoading={isLoading}
            onClick={onClick}
          />
        </section>
        {getContent(result, isLoading)}
        <PreviousResultsList />
        <CompareResults />
      </Accordion.Body>      
    </Accordion.Item>
  )

})