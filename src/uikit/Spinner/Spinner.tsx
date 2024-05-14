import { FC } from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import { ISpinnerProps } from './types';

export const Spinner:FC<ISpinnerProps> = (props) => {

  const {
    size,
    className,
  } = props

  return (
    <BootstrapSpinner
      animation="border"
      size={size}
      role="status"
      aria-hidden="true"
      className={className}
    />
  )

}