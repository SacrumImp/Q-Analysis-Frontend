import { useStoreContext } from "../../../../../../../../../../stores";
import { ICompareButtonProps } from "./types";

export const useCompareButton = (props: ICompareButtonProps) => {

  const {
    id,
    inComparison
  } = props
  const { resultsStore } = useStoreContext()

  const onClick = () => {
    resultsStore.changePresenceInComparison(id, !inComparison)
  }

  return {
    onClick,
  }

}