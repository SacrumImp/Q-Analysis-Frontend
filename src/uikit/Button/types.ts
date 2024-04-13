export enum EButtonVariants {
  primary = 'primary',
}

export interface IButtonProps {
  variant: EButtonVariants,
  children?: React.ReactNode,
}