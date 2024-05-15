import { FC } from "react";
import { observer } from "mobx-react";
import { Button } from "../../../../../../../../../../uikit";
import { ICompareButtonProps } from "./types";
import { useCompareButton } from "./useCompareButton";

export const CompareButton:FC<ICompareButtonProps> = observer((props) => {

  const { inComparison } = props
  const {
    onClick,
  } = useCompareButton(props)

  const text = inComparison ? "Remove from comparison" : "Add to comparison";

  return (
    <Button
      variant="primary"
      onClick={onClick}
    >
      {text}
    </Button>
  )

})