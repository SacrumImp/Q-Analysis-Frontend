import { FC } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { TButtonVariants, IButtonProps } from './types';
import {
  Text,
} from '../../uikit';
import "./styles.scss";

export const Button:FC<IButtonProps> = (props) => {

  const {
    variant,
    onClick,
    children,
  } = props

  let CN = ''

  switch (variant) {
    case 'primary':
      CN = 'button__primary'
  }

  return (
    <BootstrapButton
      variant={variant}
      className={CN}
      onClick={onClick}
    >
      <Text type='span' className='button__content'>
        {children}
      </Text>
    </BootstrapButton>
  )

}