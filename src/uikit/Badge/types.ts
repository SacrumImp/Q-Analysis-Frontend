import { ReactNode } from "react";

export type TBadgeBg = "primary" | "success";

export interface IBadgeProps {
  pill?: boolean,
  bg: TBadgeBg,
  children: ReactNode,
  className?: string,
  hasCloseButton?: boolean
  onClose?: () => void,
}