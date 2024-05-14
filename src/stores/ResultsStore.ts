import { makeAutoObservable } from "mobx";
import { IExportCalculations } from "../utils/types";
import { ICalculationResult } from "../utils/exporter/types";

class ResultsStore {

  private _results: Array<ICalculationResult> = []

  constructor() {
    makeAutoObservable(this);
  }

  addResult = (data: IExportCalculations) => {
    this._results.push({
      id: this._results.length,
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

}

export const resultsStore = new ResultsStore();