import { FC } from "react";
import { Button } from "../../../../../../../../uikit";
import { IImportButtonProps } from "./types";

export const ImportButton:FC<IImportButtonProps> = (props) => {

  const {
    onClick,
  } = props

  return (
    <Button
      variant="primary"
      onClick={onClick}
    >
      Import
    </Button>
  )

}