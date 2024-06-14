import {
  ChangeEventHandler,
  MouseEventHandler,
} from "react";

export type TControlTypes = "file" | "text" | "number";

export interface IControlProps {
  type: TControlTypes,
  value?: string | number | string[],
  placeholder?: string,
  onChange?: ChangeEventHandler,
  onClick?: MouseEventHandler,
}