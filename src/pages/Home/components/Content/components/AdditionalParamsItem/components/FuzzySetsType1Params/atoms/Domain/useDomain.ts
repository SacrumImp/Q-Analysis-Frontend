import { ChangeEventHandler, useState } from "react";
import {
  FuzzySetsType1Type,
  IFuzzySetsType1RelationAdditionalParams,
} from "../../../../../../../../../../classes";
import { useTypeProperties } from "../../../hooks";

export const useDomain = () => {

  const {
    relationTypeClass,
    additionalParams,
  } = useTypeProperties<FuzzySetsType1Type, IFuzzySetsType1RelationAdditionalParams>()

  const [domainLeftBoudary, setDomainLeftBoudary] = useState<number | "">(additionalParams.Domain.LeftBoundary)
  const [domainRightBoudary, setDomainRightBoudary] = useState<number | "">(additionalParams.Domain.RightBoundary)

  const onChangeDomainLeftBoudary: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value === "") {
      setDomainLeftBoudary("")
      return
    }
    let value = parseInt(event.target.value)
    setDomainLeftBoudary(value)
    relationTypeClass.setDomain({leftBoundary: value})
  }

  const onChangeDomainRightBoudary: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value === "") {
      setDomainRightBoudary("")
      return
    }
    let value = parseInt(event.target.value)
    setDomainRightBoudary(value)
    relationTypeClass.setDomain({rightBoundary: value})
  }

  return {
    hasErrorLeft: domainLeftBoudary === "",
    hasErrorRight: domainRightBoudary === "",
    hasDomainError: domainLeftBoudary > domainRightBoudary,
    domainLeftBoudary,
    domainRightBoudary,
    onChangeDomainLeftBoudary,
    onChangeDomainRightBoudary,
  }

}