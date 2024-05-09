import { observer } from "mobx-react";
import {
  Accordion,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { useResultItem } from "./useResultItem";
import {
  ErrorResult,
  ExportResultButton,
  PerformCalculationsButton,
  SuccessfulResult,
} from "./components";
import "./styles.scss";

export const ResultsItem = observer(() => {
 
  const {
    result,
    err,
    onClick,
    isLoading,
  } = useResultItem()

  return(
    <Accordion.Item eventKey={EAccordionItems.results}>
      <Accordion.Header>Results</Accordion.Header>
      <Accordion.Body>
        <section>
          <SuccessfulResult result={result} />
          <ErrorResult errorText={err} />
        </section>
        <section className="result-item__buttons">
          <PerformCalculationsButton
            disabled={isLoading}
            isLoading={isLoading}
            onClick={onClick}
          />
          <ExportResultButton/>
        </section>
      </Accordion.Body>      
    </Accordion.Item>
  )

})