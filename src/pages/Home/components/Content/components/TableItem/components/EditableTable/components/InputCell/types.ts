import { ChangeEventHandler } from "react";

export interface IInputCellProps {
  value: string,
  onChange: ChangeEventHandler | undefined,
  onBlur: () => void,
}