import {
  IDomain,
} from "../../../../../../classes";
import { TTrapezoidChartValueType } from "../../../../../../uikit";
import { TRow } from "../../../../../../utils/types";

export interface IRelationGraphProps {
  domain: IDomain,
  data: Array<TRow>,
  type?: TTrapezoidChartValueType,
}