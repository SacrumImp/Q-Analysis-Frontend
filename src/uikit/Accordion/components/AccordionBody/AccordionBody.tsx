import { FC } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionBodyProps } from './types';

export const AccordionBody:FC<IAccordionBodyProps> = (props) => {

  const {
    children,
  } = props

  return (
    <BootstrapAccordion.Body>
      {children}
    </BootstrapAccordion.Body>
  )

}