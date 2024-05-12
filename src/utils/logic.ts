import { RelationType } from "../classes";
import { TRow } from "./types";

export const getDefaultData = (type: RelationType): Array<TRow> => {
  return [[1, type.getDefaultValue()]]
}