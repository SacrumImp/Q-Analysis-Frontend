import { IAnalysisStructure } from "../../../../../../../../../../api/adapters/types";
import { StringConst } from "../../../../../../../../../../utils";
import {
  TColumn,
  TRow,
} from "../../../../../../../../../../utils/types";
import { MethodsLabels } from "../../../../../MethodItem/types";

export const useInitialDataModal = (systemStructure: IAnalysisStructure) => {

  const getTableData = () => {
    const columns = systemStructure.Simplices
      .map<TColumn>(simplex => {
        const index = simplex.Index + 1
        return {
          header: index.toString(),
          accessorFn: (row) => row[index],
        }
      })
    columns.unshift({
      header: StringConst.startCellValue,
      accessorFn: (row) => row[0],
    })

    const rows: Array<TRow> = systemStructure.Simplices
      .map(simplex => {
        const relations = simplex.Relations.map(relation => {
          return relation.Value
        })
        relations.unshift(simplex.Index + 1)
        return relations
      })

    return {
      columns,
      rows,
    }
  }

  return {
    ...getTableData(),
    eccentricityCalculationApproach: MethodsLabels.get(systemStructure.EccentricityCalculationMethod.toString())
  }

}