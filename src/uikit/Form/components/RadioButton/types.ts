import {
  ChangeEventHandler,
  ReactNode,
} from "react";

export interface IRadioButtonProps {
  label: ReactNode,
  id: string,
  name: string,
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  checked?: boolean,
  disabled?: boolean,
  className?: string,
}