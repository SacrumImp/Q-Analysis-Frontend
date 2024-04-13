export enum ETextTypes {
  H1 = "h1",
  H2 = "h2",
}

export interface ITextParams {
  type?: ETextTypes,
  className?: string,
  children: React.ReactNode,
}