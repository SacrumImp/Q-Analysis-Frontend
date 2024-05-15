import { ReactNode } from "react";
import { EMethods } from "../../types";

export interface IMethodRadioButtonProps {
  method: EMethods,
  methodDescription?: ReactNode,
}