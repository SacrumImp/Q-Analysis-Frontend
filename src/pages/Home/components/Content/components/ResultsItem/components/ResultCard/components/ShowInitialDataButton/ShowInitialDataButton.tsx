import { FC } from "react";
import { Button } from "../../../../../../../../../../uikit";
import { IShowInitialDataButtonProps } from "./types";

export const ShowInitialDataButton:FC<IShowInitialDataButtonProps> = (props) => {

  const { onClick } = props

  return (
    <Button
      variant='primary'
      onClick={onClick}
    >
      Show Initial Data
    </Button>
  )

}