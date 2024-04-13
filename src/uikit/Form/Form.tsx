import { Form as BootstrapForm } from 'react-bootstrap';
import { IFormComponent } from './types';
import {
  RadioButton,
} from './components';

export const Form:IFormComponent = (props) => {

  const {
    children,
  } = props

  return (
    <BootstrapForm>
      {children}
    </BootstrapForm>
  )

}

Form.RadioButton = RadioButton


