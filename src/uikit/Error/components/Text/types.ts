export enum EErrorTexts {
  clippingPoint = "The value must be in the range from 0 to 1!",
  domainBoundaries = "The left border of the domain should be smaller than the right border of the domain",
  domainBoundary = "The boundary must be defined!",
  matchProportion = "The value must be in the range from 0 to 100!",
}

export interface ITextProps {
  hasError: boolean,
  errorText: EErrorTexts,
  className?: string,
}