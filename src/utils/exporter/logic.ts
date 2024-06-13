import {
  IAnalysisResult,
  IAnalysisStructure,
} from "../../api/adapters/types";
import { RelationType } from "../../classes";
import { MethodsLabels } from "../../pages/Home/components/Content/components/MethodItem/types";
import { StringConst } from "../consts";
import { IExportCalculations } from "../types";
import {
  TTable,
  TTableCellData,
  TTransformValueFunc,
} from "./types";

export const prepareSystemStructureTable = (systemStructure: IAnalysisStructure, transformValue: TTransformValueFunc): TTable => {
  const systemStructureTable: TTable = [['']]
  systemStructure.Simplices.forEach((simplex, index) => {
    const row: Array<TTableCellData> = [simplex.Index + 1]
    simplex.Relations.forEach(relation => {
      row.push(transformValue(relation.Value))
    })
    systemStructureTable[0].push(index + 1)
    systemStructureTable.push(row)
  })
  return systemStructureTable
}

export const prepareCalculationResultsTable = (data: IExportCalculations): TTable => {
  const calculationResultsTable: TTable = []

  AddEccentricityCalculationApproachInfo(calculationResultsTable, data.systemStructure)
  AddSpace(calculationResultsTable)

  AddAdditionalParamsInfo(calculationResultsTable, data.relationTypeProperties)
  AddSpace(calculationResultsTable)
  
  if (!data.calculationResults) return calculationResultsTable

  data.calculationResults.map(result => {
    AddKeysInfo(calculationResultsTable, result)
    AddDimensionInfo(calculationResultsTable, result)
    AddVectorInfo(calculationResultsTable, result)
    AddEccentricities(calculationResultsTable, result)
    AddSpace(calculationResultsTable)
  })
  return calculationResultsTable
}

const AddSpace = (table: TTable) => {
  table.push([])
}

const AddEccentricityCalculationApproachInfo = (table: TTable, systemStructure: IAnalysisStructure) => {
  table.push(['Eccentricity calculation approach:', MethodsLabels.get(systemStructure.EccentricityCalculationMethod.toString())])
}

const AddAdditionalParamsInfo = (table: TTable, relationsTypeProperties: RelationType) => {
  table.push(["Parameter", "Value"])
  Object.entries(relationsTypeProperties.getAdditionalParams()).forEach(paramenter => {
    table.push([paramenter[0], JSON.stringify(paramenter[1])])
  })
}

const AddKeysInfo = (table: TTable, calculationResults: IAnalysisResult) => {
  if (calculationResults.isAggregated) {
    table.push(["Keys:", "Aggregated"])
  }
  else {
    table.push(["Keys:", JSON.stringify(calculationResults.keys)])
  }
}

const AddDimensionInfo = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Dimension:", calculationResults.result.dimension])
}

const AddVectorInfo = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Vector:", calculationResults.result.vectorElements])
}

const AddEccentricities = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Simplex", "Eccentricity"])
  calculationResults.result.eccentricities.forEach(eccentricity => {
    table.push([eccentricity.simplexIndex + 1, eccentricity.isTotallyDisconnected ? StringConst.totallyDisconnected : eccentricity.value])
  })
}