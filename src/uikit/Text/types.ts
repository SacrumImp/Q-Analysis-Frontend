
export type TTextTypes = 'h1' | 'h2' | 'h3' | 'span';

export interface ITextParams {
  type?: TTextTypes,
  className?: string,
  children: React.ReactNode,
}