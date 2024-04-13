import {
  ChangeEvent,
  useState
} from "react";
import { EMethods } from "./types";

export const useMethodItem = () => {

  const [selectedValue, setSelectedValue] = useState<string>(EMethods.Casti);

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
  };

  return {
    selectedValue,
    handleMethodChange,
  }

}