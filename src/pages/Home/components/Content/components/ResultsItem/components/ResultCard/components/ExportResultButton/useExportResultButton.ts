import { useStoreContext } from "../../../../../../../../../../stores";
import { exportCalculationsToXLSX } from "../../../../../../../../../../utils";
import { TData } from "../../../../../../../../../../utils/types";
import { IExportResultButtonProps } from "./types";

export const useExportResultButton = (props: IExportResultButtonProps) => {

  const { calculationsFormStore } = useStoreContext()
  const { result } = props

  const transformValue = (value: TData) => {
    return calculationsFormStore.relationsTypeProperties.transformValueToString(value)
  }

  const onClick = () => {
    exportCalculationsToXLSX(result, transformValue)
  }

  return {
    isDisabled: !result || result.isError,
    onClick,
  }

}