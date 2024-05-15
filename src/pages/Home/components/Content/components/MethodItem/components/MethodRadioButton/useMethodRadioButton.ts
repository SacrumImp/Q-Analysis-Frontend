import { ChangeEvent } from "react";
import { useStoreContext } from "../../../../../../../../stores";
import { EMethods } from "../../types";

export const useMethodRadioButton = () => {

  const { calculationsFormStore } = useStoreContext()

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    calculationsFormStore.setMethod(event.target.value as EMethods);
  };

  return {
    selectedValue: calculationsFormStore.method,
    handleMethodChange,
  }

}