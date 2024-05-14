import { ChangeEventHandler, useState } from "react";
import { IRenameResultModalProps } from "./types";
import { useStoreContext } from "../../../../../../../../../../stores";

export const useRenameResultModal = (props: IRenameResultModalProps) => {

  const {
    handleClose,
    name,
    id,
  } = props
  const { resultsStore } = useStoreContext()
  const [value, setValue] = useState(name)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  const onExited = () => {
    setValue(name)
  }

  const onSave = () => {
    resultsStore.renameResult(id, value)
    handleClose()
  }

  return {
    value,
    onChange,
    isDisabled: !value.length,
    onSave,
    onExited,
  }

}