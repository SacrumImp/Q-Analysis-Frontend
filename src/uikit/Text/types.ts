
export type TTextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'span';

export interface ITextParams {
  type?: TTextTypes,
  className?: string,
  children: React.ReactNode,
}