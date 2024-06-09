import {
  FC,
  ReactNode,
} from "react";
import { IRadioButtonProps } from "./components/RadioButton/types";
import { IControlProps } from "./components/Control/types";
import { IGroupProps } from "./components/Group/types";
import { ILabelProps } from "./components/Label/types";

interface IFormProps {
  children?: ReactNode,
  className?: string,
}

export interface IFormComponent extends FC<IFormProps> {
  RadioButton: FC<IRadioButtonProps>,
  Control: FC<IControlProps>,
  Group: FC<IGroupProps>,
  Label: FC<ILabelProps>,
}