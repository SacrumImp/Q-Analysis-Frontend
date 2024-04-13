import { ChangeEventHandler } from "react";

export interface IRadioButtonProps {
  label: string,
  id: string,
  name: string,
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  checked?: boolean,
  disabled?: boolean,
}