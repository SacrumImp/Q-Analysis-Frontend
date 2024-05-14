import { FC } from "react";
import {
  Form,
  Modal,
  Button,
} from "../../../../../../../../../../uikit";
import { useRenameResultModal } from "./useRenameResultModal";
import { IRenameResultModalProps } from "./types";
import { observer } from "mobx-react";

export const RenameResultModal:FC<IRenameResultModalProps> = observer((props) => {

  const {
    show,
    handleClose,
  } = props

  const {
    value,
    onChange,
    isDisabled,
    onSave,
    onExited,
  } = useRenameResultModal(props)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      onExited={onExited}
    >
      <Modal.Header closeButton>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter a new name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={handleClose}
        >
          Close
        </Button>
        <Button 
          variant="primary"
          disabled={isDisabled}
          onClick={onSave}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )

})