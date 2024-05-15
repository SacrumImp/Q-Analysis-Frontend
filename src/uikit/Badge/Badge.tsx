import { FC } from 'react';
import { Badge as BootstrapBadge} from 'react-bootstrap';
import { IBadgeProps } from './types';

export const Badge:FC<IBadgeProps> = (props) => {

  const {
    pill = false,
    bg,
    children,
    className,
  } = props

  return (
    <BootstrapBadge
      pill={pill}
      bg={bg}
      className={className}
    >
      {children}
    </BootstrapBadge>
  )

}