import {
  ChangeEvent,
  useEffect,
} from "react";
import { ERelationsTypes } from "./types";
import { useStoreContext } from "../../../../../../stores";

export const useRelationsTypeItem = () => {

  const { calculationsFormStore } = useStoreContext()

  const handleRelationTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    calculationsFormStore.setRelationsType(event.target.value as ERelationsTypes);
  };

  useEffect(() => {
    calculationsFormStore.clearElements()
  }, [calculationsFormStore.relationsType])

  return {
    selectedValue: calculationsFormStore.relationsType,
    handleRelationTypeChange,
  }

}