import { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { IRadioButtonProps } from './types';
import {
  ETextTypes,
  Text,
} from '../../../../uikit';

export const RadioButton:FC<IRadioButtonProps> = (props) => {
  
  const {
    label,
    ...remainProps
  } = props

  return (
    <Form.Check
      type={'radio'}
      disabled={false}
      label={
        <Text type={ETextTypes.span}>
          {props.label}
        </Text>
      }
      {...remainProps}
    />
  )
}