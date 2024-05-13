import { FC } from "react";
import { IEccentricitiesTableProps } from "./types";
import { splitArray } from "./logic";
import { Table } from "../../../../../../../../uikit";
import {
  CellsCouple,
  HeadersCouple,
} from "./components";

export const EccentricitiesTable:FC<IEccentricitiesTableProps> = (props) => {

  const { data } = props

  if (data.length === 0) return null

  const arrays = splitArray(data);

  return (
    <Table>
      <thead>
        <tr>
          {
            Array.from({ length: arrays.length }, (_, index) => (
              <HeadersCouple key={index}/>
            ))
          }
          </tr>
      </thead>
      <tbody>
        {
          Array.from({ length: arrays[0].length }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {
                 Array.from({ length: arrays.length }, (_, colIndex) => (
                    <CellsCouple
                      key={`${rowIndex}-${colIndex}`}
                      data={arrays[colIndex][rowIndex]}
                    />
                 ))
              }
            </tr>
          ))
        }
      </tbody>
    </Table>
  )

}