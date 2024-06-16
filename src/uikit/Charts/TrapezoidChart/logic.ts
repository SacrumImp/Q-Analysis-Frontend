
import {
  TTrapezoid,
  TTrapezoidSegments,
} from "../../../classes";
import {
  ITrapezoidChartData,
  TTrapezoidChartValueType,
  TTrapezoidChartValue,
} from "./types";

export const prepareData = (value: TTrapezoidChartValue, type: TTrapezoidChartValueType): Array<ITrapezoidChartData> => {
  if (type === "trapezoid") {
    var trapezoidValue = value as TTrapezoid
    if (trapezoidValue === null) return []
    return [
      {
        xValue: trapezoidValue.LeftBottomPoint,
        yValue: 0,
        title: trapezoidValue.LeftBottomPoint.toString(),
      },
      {
        xValue: trapezoidValue.LeftTopPoint,
        yValue: 1,
        title: trapezoidValue.LeftTopPoint.toString(),
      },
      {
        xValue: trapezoidValue.RightTopPoint,
        yValue: 1,
        title: trapezoidValue.RightTopPoint.toString(),
      },
      {
        xValue: trapezoidValue.RightBottomPoint,
        yValue: 0,
        title: trapezoidValue.RightBottomPoint.toString(),
      },
    ]
  }
  else if (type === "trapezoid-segments") {
    var trapezoidSegmentsValue = value as TTrapezoidSegments
    if (trapezoidSegmentsValue === null) return []
    return [
      {
        xValue: (trapezoidSegmentsValue.LeftBottomPoint.LeftBoundary + trapezoidSegmentsValue.LeftBottomPoint.RightBoundary) / 2,
        yValue: 0,
        title: `[${trapezoidSegmentsValue.LeftBottomPoint.LeftBoundary}; ${trapezoidSegmentsValue.LeftBottomPoint.RightBoundary}]`,
      },
      {
        xValue: (trapezoidSegmentsValue.LeftTopPoint.LeftBoundary + trapezoidSegmentsValue.LeftTopPoint.RightBoundary) / 2,
        yValue: 1,
        title: `[${trapezoidSegmentsValue.LeftTopPoint.LeftBoundary}; ${trapezoidSegmentsValue.LeftTopPoint.RightBoundary}]`,
      },
      {
        xValue: (trapezoidSegmentsValue.RightTopPoint.LeftBoundary + trapezoidSegmentsValue.RightTopPoint.RightBoundary) / 2,
        yValue: 1,
        title: `[${trapezoidSegmentsValue.RightTopPoint.LeftBoundary}; ${trapezoidSegmentsValue.RightTopPoint.RightBoundary}]`,
      },
      {
        xValue: (trapezoidSegmentsValue.RightBottomPoint.LeftBoundary + trapezoidSegmentsValue.RightBottomPoint.RightBoundary) / 2,
        yValue: 0,
        title: `[${trapezoidSegmentsValue.RightBottomPoint.LeftBoundary}; ${trapezoidSegmentsValue.RightBottomPoint.RightBoundary}]`,
      },
    ]
  }
  return []
}