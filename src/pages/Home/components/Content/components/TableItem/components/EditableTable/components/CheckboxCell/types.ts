export interface ICheckboxCellProps {
  value: boolean,
  changeValue: (value: boolean) => void,
  onBlur: () => void,
}