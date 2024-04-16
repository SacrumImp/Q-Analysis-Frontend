import { FC } from 'react';
import { ButtonGroup as BootstrapButtonGroup } from 'react-bootstrap';
import { IButtonGroupProps } from './types';

export const ButtonGroup:FC<IButtonGroupProps> = (props) => {

  const {
    className,
    children,
  } = props

  return (
    <BootstrapButtonGroup className={className}>
      {children}
    </BootstrapButtonGroup>
  )

}