import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { IExportCalculations } from "../types";
import { prepareCalculationResultsTable, prepareSystemStructureTable } from "./logic";

export const exportCalculationsToXLSX = (data: IExportCalculations | null) => {

  if (data == null || !data.calculationResults) return null

  const {
    systemStructure,
    calculationResults,
  } = data

  const systemStructureTable = prepareSystemStructureTable(systemStructure)
  const calculationResultsTable = prepareCalculationResultsTable(systemStructure, calculationResults)

  const structureSheet = XLSX.utils.aoa_to_sheet(systemStructureTable);
  const calculationResultsSheet = XLSX.utils.aoa_to_sheet(calculationResultsTable);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, structureSheet, "System's model");
  XLSX.utils.book_append_sheet(wb, calculationResultsSheet, "Results");
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "Q-Analysis result.xlsx");

}