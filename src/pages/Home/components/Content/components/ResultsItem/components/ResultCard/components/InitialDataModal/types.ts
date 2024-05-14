import { IAnalysisStructure } from "../../../../../../../../../../api/adapters/types";
import { RelationType } from "../../../../../../../../../../classes";

export interface IInitialDataModal {
  show: boolean,
  handleClose: () => void,
  name: string,
  systemStructure: IAnalysisStructure,
  relationsTypeProperties: RelationType,
}