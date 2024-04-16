import {
  FC,
  ReactNode,
} from "react";
import { IRadioButtonProps } from "./components/RadioButton/types";

interface IFormProps {
  children?: ReactNode,
}

export interface IFormComponent extends FC<IFormProps> {
  RadioButton: React.FC<IRadioButtonProps>,
}