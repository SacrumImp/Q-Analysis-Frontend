import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ITitleProps } from './types';

export const Title:FC<ITitleProps> = (props) => {

  const { children } = props

  return (
    <Modal.Title>
      {children}
    </Modal.Title>
  )

}