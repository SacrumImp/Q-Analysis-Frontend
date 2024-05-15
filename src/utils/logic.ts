import { RelationType } from "../classes";
import { TRow } from "./types";

export const getDefaultData = (type: RelationType): Array<TRow> => {
  return [[1, type.getDefaultValue()]]
}

export const getDefaultResultName = () => {
  return (new Date()).toISOString()
}

export const getRandomHexColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}