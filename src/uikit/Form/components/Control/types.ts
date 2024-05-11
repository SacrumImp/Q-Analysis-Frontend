import {
  ChangeEventHandler,
} from "react";

export type TControlTypes = "file"

export interface IControlProps {
  type: TControlTypes,
  onChange?: ChangeEventHandler,
}