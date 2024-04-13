import { FC } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionItemProps } from "./types";

export const AccordionItem:FC<IAccordionItemProps> = (props) => {

  const {
    eventKey,
    children,
  } = props

  return (
    <BootstrapAccordion.Item eventKey={eventKey}>
      {children}
    </BootstrapAccordion.Item>
  )

}