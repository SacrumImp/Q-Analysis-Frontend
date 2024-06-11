import {
  ChangeEventHandler,
  ReactNode,
} from "react";

export interface ISelectProps {
  children: ReactNode,
  className?: string,
  value: number,
  onChange: ChangeEventHandler<HTMLSelectElement>,
}