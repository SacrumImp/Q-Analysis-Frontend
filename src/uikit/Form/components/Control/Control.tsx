import { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { IControlProps } from './types';

export const Control:FC<IControlProps> = (props) => {

  const {
    type,
    value,
    placeholder,
    onChange,
    onClick,
  } = props

  return (
    <Form.Control
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onClick={onClick}
    >
    </Form.Control>
  )

}