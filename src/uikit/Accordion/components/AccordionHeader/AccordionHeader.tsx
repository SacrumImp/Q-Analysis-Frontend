import { FC } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionHeaderProps } from './types';
import { Text } from "../../../../uikit";

export const AccordionHeader:FC<IAccordionHeaderProps> = (props) => {

  const {
    children,
  } = props

  return (
    <BootstrapAccordion.Header>
      <Text type='h2'>
        {children}
      </Text>
    </BootstrapAccordion.Header>
  )

} 