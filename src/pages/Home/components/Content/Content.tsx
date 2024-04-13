import { Accordion } from "../../../../uikit";
import {
  MethodItem,
  RelationsTypeItem,
  TableItem,
} from "./components";
import "./styles.scss";
import { EAccordionItems } from "./types";

export const Content = () => {

  return (
    <div className="content">
      <Accordion defaultActiveKey={[ EAccordionItems.table, EAccordionItems.method, EAccordionItems.relationType]}>
        <MethodItem/>
        <RelationsTypeItem/>
        <TableItem/>
      </Accordion>
    </div>
  )

}