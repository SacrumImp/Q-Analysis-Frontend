export enum ETextTypes {
  h1 = 'h1',
  h2 = 'h2',
  span = 'span',
}

export type TTextTypes = 'h1' | 'h2' | 'span'

export interface ITextParams {
  type?: TTextTypes,
  className?: string,
  children: React.ReactNode,
}