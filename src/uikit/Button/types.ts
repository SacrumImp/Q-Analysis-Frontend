import {
  MouseEventHandler,
  ReactNode
} from "react";

export enum EButtonVariants {
  primary = 'primary',
}

export interface IButtonProps {
  variant: EButtonVariants,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children?: ReactNode,
}