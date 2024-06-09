import { FC } from "react";
import { observer } from "mobx-react";
import { Button } from "../../../../../../../../../../uikit";
import { useExportResultButton } from "./useExportResultButton";
import { IExportResultButtonProps } from "./types";

export const ExportResultButton:FC<IExportResultButtonProps> = observer((props) => {

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

})