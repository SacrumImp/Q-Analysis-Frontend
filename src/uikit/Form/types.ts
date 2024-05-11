import {
  FC,
  ReactNode,
} from "react";
import { IRadioButtonProps } from "./components/RadioButton/types";
import { IControlProps } from "./components/Control/types";

interface IFormProps {
  children?: ReactNode,
}

export interface IFormComponent extends FC<IFormProps> {
  RadioButton: FC<IRadioButtonProps>,
  Control: FC<IControlProps>,
}