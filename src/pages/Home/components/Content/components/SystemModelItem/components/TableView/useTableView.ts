import { useStoreContext } from "../../../../../../../../stores";

export const useTableView = () => {

  const { calculationsFormStore } = useStoreContext()

  return {
    columns: calculationsFormStore.columns,
    data: calculationsFormStore.data,
  }

}