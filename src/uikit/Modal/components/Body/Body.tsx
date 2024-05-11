import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IBodyProps } from './types';

export const Body:FC<IBodyProps> = (props) => {

  const {
    children,
    className,
  } = props

  return (
    <Modal.Body
      className={className}
    >
      {children}
    </Modal.Body>
  )

}