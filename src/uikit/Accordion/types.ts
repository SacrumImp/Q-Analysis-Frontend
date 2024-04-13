import { IAccordionBodyProps } from "./components/AccordionBody/types";
import { IAccordionHeaderProps } from "./components/AccordionHeader/types";
import { IAccordionItemProps } from "./components/AccordionItem/types";

interface IAccordionProps {
  defaultActiveKey?: Array<string>,
  alwaysOpen?: boolean,
  children?: React.ReactNode,
}

export interface IAccordionComponent extends React.FC<IAccordionProps> {
  Item: React.FC<IAccordionItemProps>,
  Header: React.FC<IAccordionHeaderProps>,
  Body: React.FC<IAccordionBodyProps>,
}