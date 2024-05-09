import { observer } from "mobx-react";
import { Button } from "../../../../../../../../uikit";
import { useExportResultButton } from "./useExportResultButton";

export const ExportResultButton = observer(() => {

  const {
    onClick,
    isDisabled,
  } = useExportResultButton()

  if (isDisabled) return null

  return (
    <Button
      variant='primary'
      onClick={onClick}
    >
      Export table
    </Button>
  )

})