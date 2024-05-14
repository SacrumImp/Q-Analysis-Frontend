import { useStoreContext } from "../../../../../../stores";

export const useEditableTable = () => {

  const { calculationsFormStore } = useStoreContext()

  const updateElement = (rowId: number, columnId: string, value: unknown) => {
    calculationsFormStore.updateElement(rowId, columnId, value as number)
  }

  return {
    updateElement,
  }

}