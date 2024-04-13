import { ChangeEventHandler } from "react";

export interface IRadioButtonProps {
  label: React.ReactNode,
  id: string,
  name: string,
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  checked?: boolean,
  disabled?: boolean,
}