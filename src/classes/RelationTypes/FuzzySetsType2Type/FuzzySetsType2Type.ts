import { ERelationsTypes } from "../../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "../RelationType";
import { IDomain } from "../types";
import {
  IFuzzySetsType2Relation,
  IFuzzySetsType2RelationAdditionalParams,
  ISegment,
  TTrapezoidSegments,
} from "./types";

export class FuzzySetsType2Type extends RelationType {

  private _domain: IDomain = {
    LeftBoundary: 0,
    RightBoundary: 0,
  }
  private _clippingPoints: Set<number> = new Set([0.5])
  private _matchProportion: number = 0

  constructor() {
    super()
    this._type = ERelationsTypes.fuzzySetsType2
  }

  getDefaultValue = (): TTrapezoidSegments => {
    return null
  }

  getAdditionalParams(): IFuzzySetsType2RelationAdditionalParams {

    if (this._clippingPoints.size === 0) {
      throw new Error("Clipping point should be set")
    }

    return {
      Domain: this._domain,
      ClippingPoints: Array.from(this._clippingPoints).sort(),
      MatchProportion: this._matchProportion,
    }
  }

  transformValueToString = (value: TTrapezoidSegments): string | undefined => {
    if (value === null) return
    return `[{${value.LeftBottomPoint.LeftBoundary}; ${value.LeftBottomPoint.RightBoundary}}; {${value.LeftTopPoint.LeftBoundary}; ${value.LeftTopPoint.RightBoundary}}; {${value.RightTopPoint.LeftBoundary}; ${value.RightTopPoint.RightBoundary}}; {${value.RightBottomPoint.LeftBoundary}, ${value.RightBottomPoint.RightBoundary}}]`
  }

  getRelationWithValue = (value: TTrapezoidSegments): IFuzzySetsType2Relation => {
    
    if (this._clippingPoints.size === 0) {
      throw new Error("Clipping point should be set")
    }
    return {
      $type: "FuzzySetsType2",
      Value: value || null,
      Domain: this._domain,
      ClippingPoints: Array.from(this._clippingPoints).sort(),
      MatchProportion: this._matchProportion,
    }
  }

  setDomain = (value: {leftBoundary?: number, rightBoundary?: number}) => {
    this._domain = {
      LeftBoundary: value.leftBoundary || this._domain.LeftBoundary,
      RightBoundary: value.rightBoundary || this._domain.RightBoundary,
    }
  }

  addClippingPoint = (value: number) => {
    this._clippingPoints.add(value)
  }

  deleteClippingPoint = (value: number) => {
    this._clippingPoints.delete(value);
  }

  setMatchProportion = (value: number) => {
    this._matchProportion = value
  }

  transformValueFromString(value?: string | undefined): TTrapezoidSegments | undefined {
    if (value === undefined) return
    const points = value.replace(/[\[\]]+/g,'').split(";")
    if (points.length !== 4) return
    const transformedPoints = points.map((point): ISegment => {
      const boundaries = point.replace(/[\{\}]+/g,'').split(",")
      return {
        LeftBoundary: parseFloat(boundaries[0]),
        RightBoundary: parseFloat(boundaries[1]),
      }
    })
    return {
      LeftBottomPoint: transformedPoints[0],
      LeftTopPoint: transformedPoints[1],
      RightTopPoint: transformedPoints[2],
      RightBottomPoint: transformedPoints[3],
    }
  }

  validateValue(value: any): boolean {
    if (value === undefined) return true
    const points = value.replace(/[\[\]]+/g,'').split(";")
    if (points.length !== 4) return false
    const parsedValues: Array<ISegment> = points.map((point: any): ISegment => {
      const boundaries = point.replace(/[\{\}]+/g,'').split(",")
      return {
        LeftBoundary: parseFloat(boundaries[0]),
        RightBoundary: parseFloat(boundaries[1]),
      }
    })
    if (parsedValues.some((point: ISegment) => isNaN(point.LeftBoundary) || isNaN(point.RightBoundary))) return false
    return this._domain.LeftBoundary <= parsedValues[0].LeftBoundary &&
      parsedValues[0].LeftBoundary <= parsedValues[1].RightBoundary &&
      parsedValues[0].LeftBoundary <= parsedValues[0].RightBoundary &&
      parsedValues[0].RightBoundary <= parsedValues[1].RightBoundary &&
      parsedValues[0].LeftBoundary <= parsedValues[1].LeftBoundary &&
      parsedValues[1].LeftBoundary <= parsedValues[1].RightBoundary &&
      parsedValues[1].RightBoundary < parsedValues[2].LeftBoundary &&
      parsedValues[2].LeftBoundary <= parsedValues[3].RightBoundary &&
      parsedValues[2].LeftBoundary <= parsedValues[2].RightBoundary &&
      parsedValues[2].RightBoundary <= parsedValues[3].RightBoundary &&
      parsedValues[2].LeftBoundary <= parsedValues[3].LeftBoundary &&
      parsedValues[3].LeftBoundary <= parsedValues[3].RightBoundary &&
      parsedValues[3].RightBoundary <= this._domain.RightBoundary
  }

}