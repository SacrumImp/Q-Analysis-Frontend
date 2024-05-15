import { makeAutoObservable } from "mobx";
import { 
  IExportCalculations,
  ICalculationResult,
} from "../utils/types";

class ResultsStore {

  private _results: Array<ICalculationResult> = []

  constructor() {
    makeAutoObservable(this);
  }

  addResult = (data: IExportCalculations) => {
    this._results.push({
      id: this._results.length,
      inComparison: false,
      ...data,
    })
  }

  get currentResult(): ICalculationResult | null {
    if (this._results.length == 0) return null
    return this._results[this._results.length - 1]
  }

  get hasResultForExport(): boolean {
    return this.currentResult !== null
  }

  get successfulResults(): Array<ICalculationResult> {
    return this._results.filter(result => !result.isError)
  }

  get resultsCount(): number {
    return this._results.length
  }

  renameResult = (id: number, value: string) => {
    const index = this._results.findIndex(result => result.id === id)
    if (index === undefined) return
    this._results[index].name = value
  }

  changePresenceInComparison = (id: number, value: boolean) => {
    const index = this._results.findIndex(result => result.id === id)
    if (index === undefined) return
    this._results[index].inComparison = value
  }

  get resultsForComparison(): Array<ICalculationResult> {
    return this._results.filter(result => result.inComparison)
  }

}

export const resultsStore = new ResultsStore();