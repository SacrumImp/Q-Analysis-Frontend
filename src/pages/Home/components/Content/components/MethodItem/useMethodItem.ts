import {
  ChangeEvent,
} from "react";
import { EMethods } from "./types";
import { useStoreContext } from "../../../../../../stores";

export const useMethodItem = () => {

  const { calculationsFormStore } = useStoreContext()

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    calculationsFormStore.setMethod(event.target.value as EMethods);
  };

  return {
    selectedValue: calculationsFormStore.method,
    handleMethodChange,
  }

}