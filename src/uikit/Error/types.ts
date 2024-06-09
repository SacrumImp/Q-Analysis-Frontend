import { FC } from "react";
import { ITextProps } from "./components/Text/types";

export interface IErrorComponent extends FC {
  Text: FC<ITextProps>
}