import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ITitleProps } from './types';
import { Text } from "../../../../uikit";
import "./styles.scss";

export const Title:FC<ITitleProps> = (props) => {

  const { children } = props

  return (
    <Modal.Title>
      <Text className="modal-title__text">
        {children}
      </Text>
    </Modal.Title>
  )

}