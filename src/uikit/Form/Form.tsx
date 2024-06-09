import { Form as BootstrapForm } from 'react-bootstrap';
import { IFormComponent } from './types';
import {
  Control,
  RadioButton,
  Group,
  Label,
} from './components';

export const Form:IFormComponent = (props) => {

  const {
    children,
    className,
  } = props

  return (
    <BootstrapForm
      className={className}
    >
      {children}
    </BootstrapForm>
  )

}

Form.RadioButton = RadioButton;
Form.Control = Control;
Form.Group = Group;
Form.Label = Label;


