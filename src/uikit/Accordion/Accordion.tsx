import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionComponent } from './types';
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from './components';

export const Accordion:IAccordionComponent = (props) => {

  const {
    defaultActiveKey,
    alwaysOpen = true,
    children,
  } = props
  
  return (
    <BootstrapAccordion
      alwaysOpen={alwaysOpen}
      defaultActiveKey={defaultActiveKey}
    >
      {children}
    </BootstrapAccordion>
  )

}

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Body = AccordionBody