import { Accordion } from "../../../../uikit";
import {
  MethodItem,
  RelationsTypeItem,
  TableItem,
} from "./components";
import { ResultsItem } from "./components/ResultsItem";
import "./styles.scss";
import { EAccordionItems } from "./types";

export const Content = () => {

  return (
    <div className="content">
      <Accordion defaultActiveKey={[ EAccordionItems.table, EAccordionItems.method, EAccordionItems.relationType, EAccordionItems.results]}>
        <MethodItem/>
        <RelationsTypeItem/>
        <TableItem/>
        <ResultsItem/>
      </Accordion>
    </div>
  )

}