import {
  FC,
  ReactNode,
} from "react";
import { IHeaderProps } from "./components/Header/types";
import { ITitleProps } from "./components/Title/types";
import { IBodyProps } from "./components/Body/types";
import { IFooterProps } from "./components/Footer/types";

export interface IModalProps {
  children?: ReactNode,
  show?: boolean,
  onHide?: () => void,
  dialogClassName?: string,
  onExited?: () => void,
}

export interface IModalComponent extends FC<IModalProps> {
  Header: FC<IHeaderProps>,
  Title: FC<ITitleProps>,
  Body: FC<IBodyProps>,
  Footer: FC<IFooterProps>,
}