import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IFooterProps } from './types';

export const Footer:FC<IFooterProps> = (props) => {

  const { children } = props

  return (
    <Modal.Footer>
      {children}
    </Modal.Footer>
  )

}