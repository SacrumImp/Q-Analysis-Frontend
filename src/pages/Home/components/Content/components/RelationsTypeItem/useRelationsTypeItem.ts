import {
  ChangeEvent,
  useState,
} from "react";
import { ERelationTypes } from "./types";

export const useRelationsTypeItem = () => {

  const [selectedValue, setSelectedValue] = useState<string>(ERelationTypes.binary);

  const handleRelationTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
  };

  return {
    selectedValue,
    handleRelationTypeChange,
  }

}