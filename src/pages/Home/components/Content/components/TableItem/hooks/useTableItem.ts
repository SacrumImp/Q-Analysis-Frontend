import { useStoreContext } from "../../../../../../../stores";

export const useTableItem = () => {

  const { calculationsFormStore } = useStoreContext()

  return {
    columns: calculationsFormStore.columns,
    data: calculationsFormStore.data,
  }

}