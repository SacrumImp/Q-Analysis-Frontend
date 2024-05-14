import { observer } from "mobx-react";
import {
  Accordion,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { useResultItem } from "./useResultItem";
import {
  PerformCalculationsButton,
  ResultCard,
} from "./components";
import "./styles.scss";
import { IExportCalculations } from "../../../../../../utils/types";

const getContent = (result: IExportCalculations | null, isLoading: boolean) => {
  if (result === null || isLoading) return null
  else {
    return (
      <ResultCard
        isCurrentResult
        result={result}
        />
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
      </Accordion.Body>      
    </Accordion.Item>
  )

})