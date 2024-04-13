import { FC } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionHeaderProps } from './types';
import { ETextTypes, Text } from "../../../../uikit";

export const AccordionHeader:FC<IAccordionHeaderProps> = (props) => {

  const {
    children,
  } = props

  return (
    <BootstrapAccordion.Header>
      <Text type={ETextTypes.h2}>
        {children}
      </Text>
    </BootstrapAccordion.Header>
  )

} 