import {
  MouseEventHandler,
  ReactNode,
} from "react";

export type TButtonVariants = "primary" | "secondary";

export interface IButtonProps {
  variant: TButtonVariants,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children?: ReactNode,
  disabled?: boolean,
}