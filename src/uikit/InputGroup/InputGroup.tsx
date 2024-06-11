import { FC } from 'react';
import { InputGroup as BootstrapInputGroup } from 'react-bootstrap';
import { IInputGroupProps } from './types';

export const InputGroup:FC<IInputGroupProps> = (props) => {

  const {
    children,
    className = "",
  } = props

  return (
    <BootstrapInputGroup
      className={className}
    >
      {children}
    </BootstrapInputGroup>
  )

}