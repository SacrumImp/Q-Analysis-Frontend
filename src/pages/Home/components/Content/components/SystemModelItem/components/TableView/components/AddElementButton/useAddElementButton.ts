import { useStoreContext } from "../../../../../../../../../../stores";


export const useAddElementButton = () => {

  const { calculationsFormStore } = useStoreContext()

  const onClick = () => {
    calculationsFormStore.addElement()
  }

  return {
    onClick,
  }

}