import { ChangeEventHandler } from "react";
import { IAnalysisResult } from "../../../../../../../../../../api/adapters/types";

export interface ISelectSubResultProps {
  calculationResults?: Array<IAnalysisResult>,
  value: number,
  onChange: ChangeEventHandler<HTMLSelectElement>,
}