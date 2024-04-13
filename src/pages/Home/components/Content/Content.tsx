import { Accordion } from "../../../../uikit";
import {
  MethodItem,
  TableItem,
} from "./components";
import "./styles.scss";
import { EAccordionItems } from "./types";

export const Content = () => {

  return (
    <div className="content">
      <Accordion defaultActiveKey={[ EAccordionItems.table, EAccordionItems.method ]}>
        <TableItem/>
        <MethodItem/>
      </Accordion>
    </div>
  )

}