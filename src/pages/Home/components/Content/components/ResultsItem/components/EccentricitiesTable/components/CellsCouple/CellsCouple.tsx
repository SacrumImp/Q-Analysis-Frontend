import { FC } from "react";
import { ICellsCouple } from "./types";
import { StringConst } from "../../../../../../../../../../utils";

export const CellsCouple:FC<ICellsCouple> = (props) => {

  const { data } = props

  return (
    <>
      <td>
        {data.simplexIndex}
      </td>
      <td>
        {
          data.isTotallyDisconnected ?
          StringConst.totallyDisconnected
          :
          data.value
        }
      </td>
    </>
  )

}