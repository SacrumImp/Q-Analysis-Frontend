import { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { IRadioButtonProps } from './types';

export const RadioButton:FC<IRadioButtonProps> = (props) => {
  
  return (
    <Form.Check
      type={'radio'}
      {...props}
    />
  )
}