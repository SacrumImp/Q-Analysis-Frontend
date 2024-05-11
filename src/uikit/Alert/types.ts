export type TAlertVariants = "success" | "danger";

export interface IAlertProps {
  children: string,
  variant: TAlertVariants,
}