import { FC } from 'react';
import { InputGroup as BootstrapInputGroup } from 'react-bootstrap';
import { IInputGroupProps } from './types';

export const InputGroup:FC<IInputGroupProps> = (props) => {

  const { children } = props

  return (
    <BootstrapInputGroup>
      {children}
    </BootstrapInputGroup>
  )

}