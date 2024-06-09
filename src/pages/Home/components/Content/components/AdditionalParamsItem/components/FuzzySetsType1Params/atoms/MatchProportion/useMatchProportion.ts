import { ChangeEventHandler, useState } from "react"
import {
  FuzzySetsType1Type,
  IFuzzySetsType1RelationAdditionalParams,
} from "../../../../../../../../../../classes"
import { useTypeProperties } from "../../../hooks"

export const useMatchProportion = () => {
  
  const {
    relationTypeClass,
    additionalParams,
  } = useTypeProperties<FuzzySetsType1Type, IFuzzySetsType1RelationAdditionalParams>()

  const [value, setValue] = useState<number | "">(0)
  
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value === "") {
      setValue("")
      return
    }
    let value = parseInt(event.target.value)
    setValue(value)
    relationTypeClass.setMatchProportion(value)
  }

  return {
    hasError: value === "" || value < 0 || value > 100,
    value,
    onChange,
  }
}