import { FC } from "react";
import { observer } from "mobx-react";
import {
  Form,
  Modal,
  Text,
} from "../../../../../../../../uikit";
import { IMethodRadioButtonProps } from "./types";
import { MethodsLabels } from "../../types";
import { useMethodRadioButton } from "./useMethodRadioButton";
import { useModal } from "../../../../../../../../utils";
import "./styles.scss";

export const MethodRadioButton:FC<IMethodRadioButtonProps> = observer((props) => {

  const {
    method,
    methodDescription,
  } = props

  const {
    selectedValue,
    handleMethodChange,
  } = useMethodRadioButton()

  const {
    show,
    handleClose,
    onClick,
  } = useModal()

  return (
    <section className="method-radio-button">
      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Method Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text className="method-radio-button__description-text">
            {methodDescription}
          </Text>
        </Modal.Body>
      </Modal>
      <Form.RadioButton
        id={`method-switch-${method.toString()}`}
        label={MethodsLabels.get(method)}
        name='method-switch'
        value={method}
        onChange={handleMethodChange}
        checked={selectedValue === method}
        className="method-radio-button__input"
      />
      {
        !!methodDescription ?
        <i
          className="bi bi-info-square-fill method-radio-button__icon"
          onClick={onClick}
          title="Click for description"
        />
        : null
      }
    </section>
  )

})