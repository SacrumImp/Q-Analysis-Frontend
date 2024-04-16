import { Button } from "../../../../../../../../uikit";
import { useClearElementsButton } from "./useClearElementsButton";

export const ClearElementsButton = () => {

  const { 
    onClick,
  } = useClearElementsButton()

  return(
    <Button
      variant="primary"
      onClick={onClick}
    >
      Clear Elements
    </Button>
  )

}