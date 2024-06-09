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

export const prepareSystemStructureTable = (systemStructure: IAnalysisStructure, transformValue?: TTransformValueFunc): TTable => {
  const systemStructureTable: TTable = [['']]
  systemStructure.Simplices.forEach((simplex, index) => {
    const row: Array<TTableCellData> = [simplex.Index + 1]
    simplex.Relations.forEach(relation => {
      if (typeof relation.Value !== "object") {
        row.push(relation.Value)
      }
      else if (!!transformValue) {
        row.push(transformValue(relation.Value))
      }
      else {
        throw new Error("The cell type is not supported or the converter is not specified")
      }
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
  AddDimensionInfo(calculationResultsTable, data.calculationResults)
  AddVectorInfo(calculationResultsTable, data.calculationResults)
  AddEccentricities(calculationResultsTable, data.calculationResults)
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
    table.push([paramenter[0], paramenter[1]])
  })
}

const AddDimensionInfo = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Dimension:", calculationResults.dimension])
}

const AddVectorInfo = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Vector:", calculationResults.vectorElements])
}

const AddEccentricities = (table: TTable, calculationResults: IAnalysisResult) => {
  table.push(["Simplex", "Eccentricity"])
  calculationResults.eccentricities.forEach(eccentricity => {
    table.push([eccentricity.simplexIndex + 1, eccentricity.isTotallyDisconnected ? StringConst.totallyDisconnected : eccentricity.value])
  })
}