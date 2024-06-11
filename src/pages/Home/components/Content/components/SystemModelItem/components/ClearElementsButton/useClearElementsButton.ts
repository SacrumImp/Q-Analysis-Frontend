import { useStoreContext } from "../../../../../../../../stores";

export const useClearElementsButton = () => {

  const { calculationsFormStore } = useStoreContext()

  const onClick = () => {
    calculationsFormStore.clearElements()
  }

  return {
    onClick,
  }

}