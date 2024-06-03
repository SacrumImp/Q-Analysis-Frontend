import { FC } from 'react';
import { Badge as BootstrapBadge} from 'react-bootstrap';
import { IBadgeProps } from './types';

export const Badge:FC<IBadgeProps> = (props) => {

  const {
    pill = false,
    bg,
    children,
    className,
    hasCloseButton = false,
    onClose,
  } = props

  return (
    <BootstrapBadge
      pill={pill}
      bg={bg}
      className={className}
    >
      {children}
      {
        hasCloseButton &&
        <i 
          className="bi bi-x-lg resuts-list__tag-x"
          onClick={onClose}
        />
      }
    </BootstrapBadge>
  )

}