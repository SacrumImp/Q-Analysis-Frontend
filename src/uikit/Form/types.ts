import { IRadioButtonProps } from "./components/RadioButton/types";

interface IFormProps {
  children?: React.ReactNode,
}

export interface IFormComponent extends React.FC<IFormProps> {
  RadioButton: React.FC<IRadioButtonProps>,
}