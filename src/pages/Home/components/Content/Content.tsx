import { Accordion } from "../../../../uikit";
import {
  AdditionalParamsItem,
  MethodItem,
  RelationsTypeItem,
  SystemModelItem,
} from "./components";
import { ResultsItem } from "./components/ResultsItem";
import "./styles.scss";
import { EAccordionItems } from "./types";

export const Content = () => {

  return (
    <div className="content">
      <Accordion defaultActiveKey={[ EAccordionItems.systemModel, EAccordionItems.method, EAccordionItems.relationType, EAccordionItems.results, EAccordionItems.additionalParams]}>
        <MethodItem/>
        <RelationsTypeItem/>
        <AdditionalParamsItem/>
        <SystemModelItem/>
        <ResultsItem/>
      </Accordion>
    </div>
  )

}