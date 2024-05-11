import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IHeaderProps } from './types';

export const Header:FC<IHeaderProps> = (props) => {

  const {
    closeButton,
    children,
  } = props

  return (
    <Modal.Header 
      closeButton={closeButton}
    >
      {children}
    </Modal.Header>
  )

}