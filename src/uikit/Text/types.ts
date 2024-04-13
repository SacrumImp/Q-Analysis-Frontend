export enum ETextTypes {
  h1 = 'h1',
  h2 = 'h2',
  span = 'span',
}

export interface ITextParams {
  type?: ETextTypes,
  className?: string,
  children: React.ReactNode,
}