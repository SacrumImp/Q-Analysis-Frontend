import { FC } from "react";
import { Button } from "../../../../../../../../../../uikit";
import { IRenameResultProps } from "./types";

export const RenameResultButton:FC<IRenameResultProps> = (props) => {

  const {
    onClick,
  } = props

  return (
    <Button
      variant="primary"
      onClick={onClick}
    >
      Rename
    </Button>
  )

}