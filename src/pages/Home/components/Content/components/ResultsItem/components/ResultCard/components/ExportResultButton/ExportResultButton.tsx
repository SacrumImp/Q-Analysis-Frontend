import { FC } from "react";
import { Button } from "../../../../../../../../../../uikit";
import { useExportResultButton } from "./useExportResultButton";
import { IExportResultButtonProps } from "./types";

export const ExportResultButton:FC<IExportResultButtonProps> = (props) => {

  const {
    onClick,
    isDisabled,
  } = useExportResultButton(props)

  return (
    <Button
      variant='primary'
      onClick={onClick}
      disabled={isDisabled}
    >
      Export table
    </Button>
  )

}