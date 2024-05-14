import {
  ChangeEventHandler,
} from "react";

export type TControlTypes = "file" | "text";

export interface IControlProps {
  type: TControlTypes,
  value?: string | number | string[],
  placeholder?: string,
  onChange?: ChangeEventHandler,
}