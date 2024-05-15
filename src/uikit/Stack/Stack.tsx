import { FC } from 'react';
import { Stack as BootstrapStack } from 'react-bootstrap';
import { IStackProps } from './types';

export const Stack:FC<IStackProps> = (props) => {

  const {
    gap,
    children,
    className,
  } = props

  return (
    <BootstrapStack
      direction="horizontal"
      gap={gap}
      className={className}
    >
      {children}
    </BootstrapStack>
  )

}