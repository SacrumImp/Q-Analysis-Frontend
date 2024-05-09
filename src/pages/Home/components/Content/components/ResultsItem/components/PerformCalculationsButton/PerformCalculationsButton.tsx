import { FC } from "react";
import {
  Button,
  Spinner,
} from "../../../../../../../../uikit";
import { IPerformCalculationsButtonProps } from "./types";

const getContent = (isLoading: boolean) => {
  if (isLoading) {
    return (
      <span>
        Perform calculations
        {' '}
        <Spinner size="sm" />
      </span>
    )
  }
  return (
    <span>
      Perform calculations
    </span>
  )
}

export const PerformCalculationsButton:FC<IPerformCalculationsButtonProps> = (props) => {

  const {
    disabled = false,
    isLoading = false,
    onClick,
  } = props
  
  return (
    <p>
      <Button
        variant='primary'
        onClick={onClick}
        disabled={disabled}
      >
        {getContent(isLoading)}
      </Button>
    </p>
  )

}