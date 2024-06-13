import {
  ChangeEventHandler,
  useState,
} from "react";

export const useResultCard = () => {

  const [selectedSubResultValue, setSelectedSubResultValue] = useState(0)

  const onChangeSelectedSubResult:ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = parseInt(event.target.value)
    if (typeof value == "number") setSelectedSubResultValue(value)
  }

  return {
    selectedSubResultValue,
    onChangeSelectedSubResult,
  }

}