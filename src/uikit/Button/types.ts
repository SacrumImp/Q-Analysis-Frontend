import {
  MouseEventHandler,
  ReactNode,
} from "react";

export type TButtonVariants = 'primary';

export interface IButtonProps {
  variant: TButtonVariants,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children?: ReactNode,
}