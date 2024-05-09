import { FC } from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import { ISpinnerProps } from './types';

export const Spinner:FC<ISpinnerProps> = (props) => {

  const { size } = props

  return (
    <BootstrapSpinner
      animation="border"
      size={size}
      role="status"
      aria-hidden="true"
    />
  )

}