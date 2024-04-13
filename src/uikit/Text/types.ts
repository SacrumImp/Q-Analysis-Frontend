export enum ETextTypes {
  H1 = "h1"
}

export interface ITextParams {
  type?: ETextTypes,
  className?: string,
  children: string,
}