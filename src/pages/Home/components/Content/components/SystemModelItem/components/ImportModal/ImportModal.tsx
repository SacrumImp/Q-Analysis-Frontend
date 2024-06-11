import { FC } from "react";
import {
  Alert,
  Button,
  Form,
  Modal,
} from "../../../../../../../../uikit";
import { IImportModalProps } from "./types";
import { useImportModal } from "./useImportModal";
import "./styles.scss";

const getAlert = (isValid?: boolean) => {
  if (isValid) {
    return (
      <section>
        <Alert
          variant="success"
        >
          Table validated successfully
        </Alert>
      </section>
    )
  }
  else if (isValid == false) {
    return (
      <section>
        <Alert
          variant="danger"
        >
          An incorrect table
        </Alert>
      </section>
    )
  }
  else return null
}

export const ImportModal:FC<IImportModalProps> = (props) => {
  
  const {
    show,
    handleClose,
  } = props

  const {
    onChange,
    isValid,
    saveTable,
  } = useImportModal()

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Import System's Model</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="import-modal-body"
      >
        <section>
          <Form.Control
            type="file"
            onChange={onChange}
          />
        </section>
        {getAlert(isValid)}
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
          disabled={!isValid}
          onClick={() => {
            saveTable()
            handleClose()
          }}
        >
          Import
        </Button>
      </Modal.Footer>
    </Modal>
  )
}