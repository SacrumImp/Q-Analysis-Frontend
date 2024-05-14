import { FC } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { IAccordionHeaderProps } from './types';
import { Text } from "../../../../uikit";

export const AccordionHeader:FC<IAccordionHeaderProps> = (props) => {

  const {
    children,
    textType = 'h2',
  } = props

  return (
    <BootstrapAccordion.Header>
      <Text type={textType}>
        {children}
      </Text>
    </BootstrapAccordion.Header>
  )

} 