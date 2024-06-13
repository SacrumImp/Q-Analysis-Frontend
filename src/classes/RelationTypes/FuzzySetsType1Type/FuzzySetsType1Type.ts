import { ERelationsTypes } from "../../../pages/Home/components/Content/components/RelationsTypeItem/types";
import { RelationType } from "../RelationType";
import {
  IDomain,
  IFuzzySetsType1Relation,
  IFuzzySetsType1RelationAdditionalParams,
  TTrapezoid,
} from "./types";

export class FuzzySetsType1Type extends RelationType {

  private _domain: IDomain = {
    LeftBoundary: 0,
    RightBoundary: 0,
  }
  private _clippingPoints: Set<number> = new Set([0.5])
  private _matchProportion: number = 0

  constructor() {
    super()
    this._type = ERelationsTypes.fuzzySetsType1
  }

  getDefaultValue = (): TTrapezoid => {
    return null
  }

  getAdditionalParams(): IFuzzySetsType1RelationAdditionalParams {

    if (this._clippingPoints.size === 0) {
      throw new Error("Clipping point should be set")
    }

    return {
      Domain: this._domain,
      ClippingPoints: Array.from(this._clippingPoints).sort(),
      MatchProportion: this._matchProportion,
    }
  }

  transformValueToString = (value: TTrapezoid): string | undefined => {
    if (value === null) return
    return `[${value.LeftBottomPoint}, ${value.LeftTopPoint}, ${value.RightTopPoint}, ${value.RightBottomPoint}]`
  }

  getRelationWithValue = (value: TTrapezoid): IFuzzySetsType1Relation => {
    
    if (this._clippingPoints.size === 0) {
      throw new Error("Clipping point should be set")
    }

    return {
      $type: "FuzzySetsType1",
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

  transformValueFromString(value?: string | undefined): TTrapezoid | undefined {
    if (value === undefined) return
    const points = value.replace(/[\[\]]+/g,'').split(",")
    if (points.length !== 4) return
    return {
      LeftBottomPoint: parseFloat(points[0]),
      LeftTopPoint: parseFloat(points[1]),
      RightTopPoint: parseFloat(points[2]),
      RightBottomPoint: parseFloat(points[3]),
    }
  }

}