import { Modal as BootstrapModal } from 'react-bootstrap';
import { IModalComponent } from './types';
import {
  Body,
  Footer,
  Header,
  Title,
} from './components';

export const Modal:IModalComponent = (props) => {

  const {
    children,
    show,
    onHide,
    dialogClassName,
    onExited,
  } = props

  return (
    <BootstrapModal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      dialogClassName={dialogClassName}
      onExited={onExited}
    >
      {children}
    </BootstrapModal>
  )

}

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;