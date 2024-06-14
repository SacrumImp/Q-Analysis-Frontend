import { ReactNode } from "react";

export type TAlertVariants = "success" | "danger";

export interface IAlertProps {
  children: ReactNode,
  variant: TAlertVariants,
}