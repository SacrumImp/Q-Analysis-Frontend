import { FC } from "react";
import {
  Alert,
  Button,
  Form,
  Modal,
  Text,
} from "../../../../../../../../uikit";
import {
  IImportModalProps,
} from "./types";
import { useImportModal } from "./useImportModal";
import "./styles.scss";

const getAlert = (isValid: boolean | null, errors: Array<string>) => {
  if (isValid === null) return null
  if (isValid) {
    return (
      <section>
        <Alert variant="success">
          <Text 
            type="span"
            className="alert__title"
          >
            Table validated successfully
          </Text>
        </Alert>
      </section>
    )
  }
  else {
    return (
      <section>
        <Alert variant="danger">
          <Text className="alert__title">
            An incorrect table
          </Text>
          {
            errors.map((err, index) => (
              <li key={index}>
                <Text
                  type="span"
                  className="alert__text"
                >
                  {err}
                </Text>
              </li>
            ))
          }
        </Alert>
      </section>
    )
  }
}

export const ImportModal:FC<IImportModalProps> = (props) => {
  
  const {
    show,
    handleClose,
  } = props

  const {
    onChange,
    isValid,
    errors,
    saveTable,
    onHide,
  } = useImportModal()

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose()
        onHide()
      }}
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
        {getAlert(isValid, errors)}
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={() => {
            handleClose()
            onHide()
          }}
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