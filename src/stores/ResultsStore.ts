import { makeAutoObservable } from "mobx";
import { IExportCalculations } from "../utils/types";

class ResultsStore {

  private _results: Array<IExportCalculations> = []

  constructor() {
    makeAutoObservable(this);
  }

  addResult = (data: IExportCalculations) => {
    this._results = [data]
  }

  get currentResult(): IExportCalculations | null {
    if (this._results.length == 0) return null
    return this._results[0]
  }

  get hasResultForExport(): boolean {
    return this.currentResult !== null
  }

}

export const resultsStore = new ResultsStore();