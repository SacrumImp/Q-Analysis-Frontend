import { useStoreContext } from "../../../../../../../../../../stores";
import { exportCalculationsToXLSX } from "../../../../../../../../../../utils";
import { IExportResultButtonProps } from "./types";

export const useExportResultButton = (props: IExportResultButtonProps) => {

  const { result } = props

  const onClick = () => {
    exportCalculationsToXLSX(result)
  }

  return {
    isDisabled: !result || result.isError,
    onClick,
  }

}