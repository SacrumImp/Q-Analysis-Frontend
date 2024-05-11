import { FC } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { IAlertProps } from './types';
import "./styles.scss";

export const Alert:FC<IAlertProps> = (props) => {

  const {
    variant,
    children,
  } = props

  return (
    <BootstrapAlert
      className="alert"
      variant={variant}
    >
      {children}
    </BootstrapAlert>
  )

}