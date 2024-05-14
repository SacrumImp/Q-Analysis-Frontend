import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../../api/adapters/types";
import { MethodsLabels } from "../../pages/Home/components/Content/components/MethodItem/types";
import { StringConst } from "../consts";

export const prepareSystemStructureTable = (systemStructure: IAnalysisStructure): Array<Array<string | number | boolean>> => {
  const systemStructureTable: Array<Array<string | number | boolean>> = [['']]
  systemStructure.Simplices.forEach((simplex, index) => {
    const row: Array<number | boolean> = [simplex.Index + 1]
    simplex.Relations.forEach(relation => {
      row.push(relation.Value)
    })
    systemStructureTable[0].push(index + 1)
    systemStructureTable.push(row)
  })
  return systemStructureTable
}

export const prepareCalculationResultsTable = (systemStructure: IAnalysisStructure, calculationResults: IAnalysisResult): Array<Array<string | number | undefined>> => {
  const calculationResultsTable: Array<(string | number | undefined)[]> = []
  calculationResultsTable.push(['Eccentricity calculation approach:', MethodsLabels.get(systemStructure.EccentricityCalculationMethod.toString())])
  calculationResultsTable.push(["Dimension:", calculationResults.dimension])
  calculationResultsTable.push(["Vector:", calculationResults.vectorElements])
  calculationResultsTable.push(["Simplex", "Eccentricity"])
  calculationResults.eccentricities.forEach(eccentricity => {
    calculationResultsTable.push([eccentricity.simplexIndex + 1, eccentricity.isTotallyDisconnected ? StringConst.totallyDisconnected : eccentricity.value])
  })
  return calculationResultsTable
}