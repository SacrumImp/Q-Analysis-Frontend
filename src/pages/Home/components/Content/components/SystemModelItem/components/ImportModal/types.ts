export interface IImportModalProps {
  show: boolean,
  handleClose: () => void,
}

export interface IValidationResult {
  isValid: boolean,
  errorList: Array<string>,
}

export type TValidationResult = IValidationResult | null