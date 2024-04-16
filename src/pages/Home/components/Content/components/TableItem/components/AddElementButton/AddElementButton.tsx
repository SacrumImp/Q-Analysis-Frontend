import { observer } from "mobx-react";
import { Button } from "../../../../../../../../uikit";
import { useAddElementButton } from "./useAddElementButton";

export const AddElementButton = observer(() => {

  const {
    onClick,
  } = useAddElementButton()

  return (
    <Button
      variant='primary'
      onClick={onClick}
    >
      + AddElement
    </Button>
  )

})